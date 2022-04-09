// create inventory bar
const inventory = newInventory()
// place inventory at the bottom left of the screen
move(inventory).to(0, 0)

// coords for initial character placement
let x = 100;
let y = 250;

// create character image
const character = newImage('assets/green-character/static.gif')
// place character at coords
move(character).to(x, y);

// function used to change the image to look like character is walking
function handleDirectionChange(direction, element){
    if (direction == "west"){
        element.src = "./assets/green-character/west.gif";
    }
    if (direction == "east"){
        element.src = "./assets/green-character/east.gif";
    }
    if (direction == "south"){
        element.src = "./assets/green-character/south.gif";
    }
    if (direction == "north"){
        element.src = "./assets/green-character/north.gif";
    }
    if (direction == null){
        element.src = "./assets/green-character/static.gif";
    }
}

// allows player to move character with arrow keys or WASD
move(character).withKeys(x,y, handleDirectionChange);

// place static images
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)