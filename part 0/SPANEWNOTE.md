```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP status code 201 created
    deactivate server
    Note right of browser: the browser stays on the same page and doesn't send any more HTTP requests. The new note is rendered.
```