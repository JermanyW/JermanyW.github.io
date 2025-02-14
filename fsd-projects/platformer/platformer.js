$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 599.9, 80, 10)
    createPlatform(300, 462.9, 80, 10)
    createPlatform(130, 330, 80, 10)
    createPlatform(300, 200, 80, 10)
    createPlatform(450, 190, 1, 600)
    createPlatform(450, 50, 1, 30)
    createPlatform(590, 250, 80, 10)
    createPlatform(490, 350, 80, 10)
    createPlatform(690, 450, 80, 10)
    createPlatform(790, 450, 150, 10)
    createPlatform(790, 300, 600, 10)
    createPlatform(670, 50, 5, 200)
    createPlatform(1030, 450, 100, 10)
    createPlatform(1030, 450, 10, 80)
    createPlatform(940, 450, 10, 80)
    createPlatform(940, 520, 100, 10)
    createPlatform(1130, 450, 150, 10)
    createPlatform(1280, 450, 10, 150)
    createPlatform(1200, 600, 100, 10)
    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
