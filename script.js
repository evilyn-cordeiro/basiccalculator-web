const result = document.getElementById("result");

const buttons = Array.from(document.getElementsByClassName("button"));

//

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.outerText) {
      case "C":
        result.innerHTML = "";
        break;
      case "←":
        result.innerHTML = result.innerHTML.slice(0, -1);
        break;
      case "=":
        result.innerHTML = eval(result.innerHTML);
        break;
      default:
        result.innerHTML += e.target.outerText;
    }
  })
})
