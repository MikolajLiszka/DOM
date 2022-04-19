const setBackground = () => {
    let redBack = document.querySelector(".red");
    let yelBack = document.querySelector(".yellow");
  
    redBack.style.backgroundColor = "red";
    yelBack.style.backgroundColor = "yellow";
  };

let change = document.getElementById("btn");
change.addEventListener("click", setBackground);




