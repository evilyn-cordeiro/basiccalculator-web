const result = document.getElementById("result")
var gb1 = "";
var gb2 = "";

function insert(params) {
  console.log(params);
  gb1 += params;
  result.innerHTML = gb1;
  // while (params !== "+") {}

}
