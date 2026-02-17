$(document).ready(function() {
    const speed = 250; // velocitat 250ms

    // Funció DRY que fa tot: mou, canvia color, easing i log
    function moveBox(direction) {
        let props = {};
        let easing = "";
        let color = "";
        let logMsg = "";

        switch(direction) {
            case "top":
                props = { top: "-=100px", backgroundColor: "blue" };
                easing = "linear";
                logMsg = "Movent cap amunt";
                break;
            case "bottom":
                props = { top: "+=100px", backgroundColor: "red" };
                easing = "easeInOutBounce";
                logMsg = "Movent cap avall";
                break;
            case "left":
                props = { left: "-=100px", backgroundColor: "green" };
                easing = "easeInBack";
                logMsg = "Movent cap esquerra";
                break;
            case "right":
                props = { left: "+=100px", backgroundColor: "yellow" };
                easing = "swing";
                logMsg = "Movent cap dreta";
                break;
        }

        console.log(logMsg);
        $("#box1").animate(props, { duration: speed, easing: easing });
    }

    // Botons
    $("#top").off("click").on("click", () => moveBox("top"));
    $("#bottom").off("click").on("click", () => moveBox("bottom"));
    $("#left").off("click").on("click", () => moveBox("left"));
    $("#right").off("click").on("click", () => moveBox("right"));

    // Teclat: fletxes i WASD
    $(document).keydown(function(event) {
        switch(event.which) {
            case 38: case 87: moveBox("top"); break;    // ArrowUp / W
            case 40: case 83: moveBox("bottom"); break; // ArrowDown / S
            case 37: case 65: moveBox("left"); break;   // ArrowLeft / A
            case 39: case 68: moveBox("right"); break;  // ArrowRight / D
        }
    });
});