AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound", () => {
      console.log("marker is found");
      this.handleMarkerFound()
     
      
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost");
      this.handleMarkerLost()
     
      
    });
  },
  handleMarkerFound: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display ="flex";

    var orderButton = document.getElementById("order-button");
    var orderSummaryButton = document.getElementById("order-summary-button");

    orderButton.addEventListener("click",()=>{
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Thanks for Order!",
        text: " ",
        timer: 2000,
        buttons: false

      })

    })

    orderSummaryButton.addEventListener("click", ()=>{
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Work in Progress"
      })
    })   
    
  },

  handleMarkerLost: function() {
    // Changing button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display ="none";


   
    
  }

  
});
