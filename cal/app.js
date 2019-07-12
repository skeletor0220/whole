
function tip() {
    var num = document.getElementById("bill").value;
    var num2 = document.getElementById("people").value;
    var num3 = document.getElementById("drop").value;
    document.getElementById("result").innerText =  "$" + num * num3 / num2;
}