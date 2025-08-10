# Backend Structure Document

## 1. Backend Architecture

We’ve chosen a modular, service-oriented design for the backend. Each major feature lives in its own module or microservice, which makes it easier to maintain, scale, and improve over time.

• Service-Oriented Architecture (SOA):
  • Outline Generation Service (Node.js/Express)  
  • Summary Creation Service (Python/FastAPI)  
  • Export & Integration Service (Node.js)  
  • Collaboration Service (Node.js + Socket.io)  
  • Analytics Service (Node.js)  

• Design Patterns & Frameworks:
  • RESTful API for most data operations  
  • WebSockets (Socket.io) for real-time collaboration  
  • Message Queue (RabbitMQ or AWS SQS) to decouple heavy tasks like NLP processing or file exports  
  
### How It Supports Key Goals

• Scalability: Each service can be scaled independently based on load (e.g., spin up more instances of the Summary Service when many users request summaries simultaneously).
• Maintainability: Smaller codebases per service allow teams to work in parallel and deploy updates with minimal risk.
• Performance: Caching (Redis) and message queues keep user-facing APIs snappy even when background tasks take time.

## 2. Database Management

• Primary Database: PostgreSQL (relational, reliable, ACID-compliant)
• Cache: Redis (in-memory store for session data, rate-limiting, and frequently used reads)
• Queue Storage: RabbitMQ or AWS SQS (for job scheduling and inter-service messaging)

Data Flow:
1. User actions (create outline, request summary) hit the API.
2. Quick-write fields (sessions, drafts) are cached in Redis.
3. Permanent records (projects, templates, exports) are stored in PostgreSQL.
4. Heavy-lifting tasks (e.g., summary generation) are pushed onto a queue for the NLP service to pull and process.

Best Practices:
• Use connection pooling for PostgreSQL to handle sudden traffic spikes.
• Archive old analytics data to a data warehouse or object storage (S3) after a set retention period.
• Implement regular backups and point-in-time restore for PostgreSQL.

## 3. Database Schema

In everyday language, here’s how our tables relate:

• Users: stores account info (email, hashed password, profile settings)  
• Projects: top-level container for outlines and summaries, linked to one user  
• Outlines: broken down into sections and subsections, each tied to a project  
• Summaries: saved outputs for each project with metadata (tone, length)  
• Templates: user-defined structures for outlines or summaries  
• Collaborations: tracks which users are editing which project in real time  
• Exports: records of files generated (PDF, DOCX) with status and storage link  
• Analytics: logs user activity, counts of outlines created, average summary lengths, etc.

### PostgreSQL Schema (SQL)

```sql
-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Projects
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Outlines
CREATE TABLE outlines (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id),
  title TEXT,
  parent_outline_id INTEGER REFERENCES outlines(id),
  position INTEGER,
  content TEXT
);

-- Summaries
CREATE TABLE summaries (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id),
  tone TEXT,
  length_pref TEXT,
  content TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Templates
CREATE TABLE templates (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name TEXT,
  structure JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Collaborations
CREATE TABLE collaborations (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id),
  user_id INTEGER REFERENCES users(id),
  role TEXT,
  joined_at TIMESTAMP DEFAULT NOW()
);

-- Exports
CREATE TABLE exports (
  id SERIAL PRIMARY KEY,
  project_id INTEGER REFERENCES projects(id),
  format TEXT,
  status TEXT,
  file_url TEXT,
  requested_at TIMESTAMP DEFAULT NOW()
);

-- Analytics
CREATE TABLE analytics (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  event_type TEXT,
  metadata JSONB,
  event_time TIMESTAMP DEFAULT NOW()
);
```  

## 4. API Design and Endpoints

We use RESTful JSON APIs for most operations, plus WebSockets for collaboration:

• Authentication & User Management:
  • POST /auth/signup  
  • POST /auth/login  
  • GET /auth/profile  

• Project & Outline:
  • GET /projects  
  • POST /projects  
  • GET /projects/{id}/outlines  
  • POST /projects/{id}/outlines  
  • PUT /outlines/{id}  
  • DELETE /outlines/{id}  

• Summaries:
  • POST /projects/{id}/summaries  
  • GET /summaries/{id}  

• Templates:
  • GET /templates  
  • POST /templates  
  • PUT /templates/{id}  

• Exports & Files:
  • POST /projects/{id}/export (body includes format)  
  • GET /exports/{id}  

• Collaboration (WebSocket channel `project-{id}`): real-time edit events, presence updates

• Analytics:
  • POST /analytics/events  
  • GET /analytics/user/{userId}  

## 5. Hosting Solutions

We host on Amazon Web Services (AWS) to balance reliability, cost, and flexibility:

• Elastic Beanstalk or ECS/EKS for containerized services  
• RDS (PostgreSQL) for our main database  
• ElastiCache (Redis) for caching/session store  
• S3 for file storage (exports, backups)  
• CloudFront CDN for serving static assets and export files  

Benefits:
• High availability with multi-AZ deployments  
• Automatic scaling of service instances based on load  
• Pay-as-you-go billing to optimize cost  

## 6. Infrastructure Components

• Load Balancer (AWS ALB): Routes traffic to healthy service instances  
• Caching (Redis via ElastiCache): Speeds up session reads and rate-limit checks  
• CDN (CloudFront): Distributes static assets and export files close to users  
• Message Queue (SQS or RabbitMQ on ECS): Decouples API requests from heavy-compute tasks  
• VPN/VPC & Security Groups: Isolate database and cache in private subnets  

Together, these components ensure fast response times, even under heavy concurrent usage.

## 7. Security Measures

• HTTPS/TLS for all traffic between clients and API  
• JWT tokens for stateless authentication  
• Role-based access control (RBAC) in collaboration and project sharing  
• Passwords hashed with bcrypt or Argon2  
• Data encryption at rest (RDS, S3) and in transit  
• Rate limiting on APIs to prevent abuse  
• Periodic security audits and dependency vulnerability scans  

These measures keep user data safe and help us comply with common data-privacy standards.

## 8. Monitoring and Maintenance

• AWS CloudWatch: monitors CPU, memory, latency, error rates  
• Prometheus & Grafana: custom metrics and dashboards for deeper insight  
• Sentry or Datadog: error tracking and alerting  
• Automated Backups & Snapshots for PostgreSQL and Redis  
• CI/CD pipeline (GitHub Actions or Jenkins): automated testing, linting, and deployments  
• Scheduled maintenance windows and health checks  

Regularly reviewing logs and metrics helps us catch issues early and keep the system running smoothly.

## 9. Conclusion and Overall Backend Summary

In summary, our backend combines a modular, service-oriented design with proven cloud infrastructure to deliver a reliable, scalable platform for outline generation, summary creation, and real-time collaboration. By using PostgreSQL for core data, Redis for caching, and AWS services for hosting and scaling, we ensure performance under load. Security best practices, full monitoring, and automated maintenance rounds out a system that meets user needs and can grow as usage increases.

Key differentiators:
• Decoupled NLP service for high-quality summaries without blocking the main API
• Real-time collaboration via WebSockets
• Flexible export pipeline for multiple file formats
• Built-in analytics to inform product decisions

This structure provides a clear roadmap for developers and stakeholders to understand exactly how the backend supports every feature of the platform.