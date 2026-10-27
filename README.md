# TranSifona LCD Tool
A web app for drawing LCD content for Minecraft MTR mod and some hardware LCD display.  
Created for exploring info screen UI design and learning JavaScript.
  
<img width="1917" height="837" alt="screenshot" src="https://github.com/user-attachments/assets/ea58e5a2-169b-41fe-85aa-6ae9efebf19c" />

# How to use
- Go to https://transifona.github.io/TranSifona-LCD-Tool/
- The page will be loaded with the language of your browser. You can change it from the top menu
- Select a shape from the top menu to start drawing
- Explore more options from the "File options" button
- JS code will be exported to main.txt (graphics only) or main.js (other settings). Screen size and position will match with TranSifona Template Resource Pack (https://modrinth.com/resourcepack/mtr-mod-m-train-with-infopanels)

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

# Credits

- Chito Wong, creator of Rail Map Generator (https://github.com/wongchito)
- Jonathan Ho, creator of Minecraft Transit Railway Mod (https://github.com/jonafanho)
