
``` mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: server sends {message: note created} json object
    deactivate server
    
    Note right of browser: the server appends the new note to the notes object
    

```