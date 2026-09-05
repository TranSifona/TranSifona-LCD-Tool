# TranSifona LCD Tool
A web app for drawing LCD content for Minecraft MTR mod and SSD1306 LCD display

# How to use
- Go to https://transifona.github.io/TranSifona-LCD-Tool/
- Select a shape from the top menu to start drawing
- Explore more options from the "File options" button
- For JS code, it will be exported to a single txt file, separated into "main.js", "info-panel.js", and "formatting.js" parts. These are designed for TranSifona Template Resource Pack (https://modrinth.com/resourcepack/mtr-mod-m-train-with-infopanels)
- If you prefer not using the Template Pack, you may look for suitable code in the exported txt file

# How was this tool made
- This tool was created with generative AI assistance, with this piece of text as the initial prompt:
> Create a web app.  
> [Features]  
> A large canvas where user can draw some rectangles and ovals. The shapes may stack over one another  
> A menu for the user to select which shape to draw  
> A layer panel which shows the layering hierarchy of the canvas  
> [Layout]  
> Top menu  
> Left layer panel  
> Right canvas  
> Bottom: a blank space that shows "Welcome to my app"
- Currently, UI/UX part are mainly AI generated, while the logic for exporting JS code and C++ code are mainly written by human

# Special thanks to
- Chito Wong, creator of Rail Map Generator https://github.com/wongchito
