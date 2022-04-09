function move(element) {
    element.style.position = 'fixed'

    // function that moves element to set position (static)
    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    // function that moves the element using the arrow or WSDA keys
    function moveWithKeys(left, bottom, callback) {
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.zIndex = 1;
    
        element.style.left = x + "px";
        element.style.bottom = y + "px";

        let moveCharacter = () => {
            // check and make sure that the object is not off the left side of the window
            if (direction == "west" && x >= 0){
                x -= 1;
            }

            // check and make sure that the object is not off the right side of the window
            if (direction == "east" && x <= window.innerWidth - element.offsetWidth){
                x += 1;
            }

            // check and make sure that the object does not go on top of the inventory bar
            if (direction == "south" && y >= 100){
                y -= 1;
            }

            // check and make sure that the object does not go off the top of the window
            if (direction == "north" && y < window.innerHeight - element.offsetHeight){
                y += 1;
            }
        
            element.style.left = x + "px";
            element.style.bottom = y + "px";
        }

        // move the element every 1 millisecond
        setInterval(moveCharacter, 1);
        
        // check and see if a button is being pressed
        document.addEventListener("keydown", function(e){
            // if the same button is being pressed do nothing (return)
            if (e.repeat) return;

            else if (e.key === "a" || e.key === "A" || e.key === "ArrowLeft"){
                direction = "west";
            }
        
            else if (e.key === "s" || e.key === "S" || e.key === "ArrowDown"){
                direction = "south";
            }
        
            else if (e.key === "d" || e.key === "D" || e.key === "ArrowRight"){
                direction = "east";
            }
        
            else if (e.key === "w" || e.key === "W" || e.key === "ArrowUp"){
                direction = "north";
            }
        
            else {
                direction = null;
            }

            // check to see if callback was defined, if so, run callback
            if (typeof callback !== "undefined"){
                callback(direction, element);
            }

        })

        // when player releases key, stop moving the character (direction == null)
        document.addEventListener("keyup", function(){
            direction = null;
            // check to see if callback was defined, if so, run callback function
            if (typeof callback !== "undefined"){
                callback(direction, element);
            }
        })
    }

    // output moveToCoords and moveWithKeys
    return {
        to: moveToCoordinates,
        withKeys: moveWithKeys
    }
}