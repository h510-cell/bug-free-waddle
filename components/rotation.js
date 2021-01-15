//Scuba Diver Rotation
AFRAME.registerComponent("scuba-diver-rotation-reader", {
    schema: {
      speedOfRoation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRoation < 0.1) {
            this.data.speedOfRoation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRoation > -0.1) {
            this.data.speedOfRoation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var Scuba_Diver_Rotation = this.el.getAttribute("rotation");
  
      Scuba_Diver_Rotation.y += this.data.speedOfRoation;
  
      this.el.setAttribute("rotation", {
        x: Scuba_Diver_Rotation.x,
        y: Scuba_Diver_Rotation.y,
        z: Scuba_Diver_Rotation.z
      });
    }
  });