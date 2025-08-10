flowchart TD
    A[Start] --> B[Collect User Input]
    B --> C[Generate Outline]
    C --> D{Create Summary}
    D -->|Yes| E[Generate Summary]
    D -->|No| F[Customize Output]
    E --> F
    F --> G{Export Or Integrate}
    G -->|Export| H[Export To Formats]
    G -->|Integrate| I[Integrate With Tools]
    H --> J{Enable Collaboration}
    I --> J
    J -->|Yes| K[Collaborate And Share]
    J -->|No| L[View Analytics]
    K --> L
    L --> M[Display Analytics And Insights]
    M --> N[End]