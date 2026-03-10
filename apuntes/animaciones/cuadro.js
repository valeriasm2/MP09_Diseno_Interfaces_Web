// Resol les següents preguntes:
// 1. Carrega jQuery des de on volgueu.


$(document).ready(function () {
    // 2. Afegiu funcionalitat als quatre buttons que apareixen a la part superior de la finestra,
    // cada cop que es faci click en una acció s'haurà de desplaçar 100 píxels en la direcció
    // depenen del botó de direcció que s'hagui clickat.
    // El moviment s'haurà de fer amb la funció nativa de jQuery ".animate()".

    $("#top").on("click", function () {
        $("#box1").animate({
            top: "-=100px"
        });
    });

    $("#bottom").on("click", function () {
        $("#box1").animate({
            top: "+=100px"
        });
    });

    $("#left").on("click", function () {
        $("#box1").animate({
            left: "-=100px"
        });
    });

    $("#right").on("click", function () {
        $("#box1").animate({
            left: "+=100px"
        });
    });

    // 3. Afageix un key binding per a que les accions també responguin a les tecles de direcció o, en cas de no tenir aquestes, A, W, S i D.

    $(document).keydown(function (event) {
        switch (event.which) {
            case 38:
                $("#top").trigger("click");
                break;
            case 40:
                $("#bottom").trigger("click");
                break;
            case 37:
                $("#left").trigger("click");
                break;
            case 39:
                $("#right").trigger("click");
                break;
        }
    });

    // 4. Modifica les accions per a que la velocitat sigui "250".
    $("#top").off("click").on("click", function () {
        $("#box1").animate({ top: "-=100px" }, {
            duration: 250,
            start: function () { console.log("Inici animació amunt"); }
        });
    });

    $("#bottom").off("click").on("click", function () {
        $("#box1").animate({ top: "+=100px" }, {
            duration: 250,
            start: function () { console.log("Inici animació avall"); }
        });
    });

    $("#left").off("click").on("click", function () {
        $("#box1").animate({ left: "-=100px" }, {
            duration: 250,
            start: function () { console.log("Inici animació esquerra"); }
        });
    });

    $("#right").off("click").on("click", function () {
        $("#box1").animate({ left: "+=100px" }, {
            duration: 250,
            start: function () { console.log("Inici animació dreta"); }
        });
    });

    // 5. Afegeix un log a la consola cada cop que s'executa una acció.
    $("#top").off("click").on("click", function () {
        $("#box1").animate({ top: "-=100px" }, {
            duration: 250,
            start: function () { console.log("Inici animació amunt"); }
        });
    });

    $("#bottom").off("click").on("click", function () {
        $("#box1").animate({ top: "+=100px" }, {
            duration: 250,
            start: function () { console.log("Inici animació avall"); }
        });
    });

    $("#left").off("click").on("click", function () {
        $("#box1").animate({ left: "-=100px" }, {
            duration: 250,
            start: function () { console.log("Inici animació esquerra"); }
        });
    });

    $("#right").off("click").on("click", function () {
        $("#box1").animate({ left: "+=100px" }, {
            duration: 250,
            start: function () { console.log("Inici animació dreta"); }
        });
    });


    // 6. Cada cop que s'executi una accio també caldra modificar més estils, en aquest cas
    // el color de fons. A dalt (blau), a la dreta (groc), a l'esquerre (verd) i  avall (vermell).



    $("#top").off("click").on("click", function () {
        $("#box1").animate(
            {
                top: "-=100px",
                backgroundColor: "blue"
            },
            {
                duration: 250,
                start: function () { console.log("Inici animació amunt"); }
            });
    });

    $("#bottom").off("click").on("click", function () {
        $("#box1").animate({ top: "+=100px", backgroundColor: "red" }, {
            duration: 250,
            start: function () { console.log("Inici animació avall"); }
        });
    });

    $("#left").off("click").on("click", function () {
        $("#box1").animate({ left: "-=100px", backgroundColor: "yellow" }, {
            duration: 250,
            start: function () { console.log("Inici animació esquerra"); }
        });
    });

    $("#right").off("click").on("click", function () {
        $("#box1").animate({ left: "+=100px", backgroundColor: "green" }, {
            duration: 250,
            start: function () { console.log("Inici animació dreta"); }
        });
    });

    // 7. Canvia el estil de la corva de easing a la següent especificació:
    // A dalt (linear), a la dreta (swing), a l'esquerre (easeInBack) i  avall (easeInOutBounce).



});







