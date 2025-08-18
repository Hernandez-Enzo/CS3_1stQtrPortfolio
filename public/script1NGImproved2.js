function checkresultHere() {
    let dage = document.getElementById("age").value;
    let dmaxAge = document.getElementById("maxAge").value;
    let dnumPerDay = document.getElementById("numPerDay").value;
    let dresultHere = (dnumPerDay * 365) * (dmaxAge - dage)
    document.getElementById("resultHere").innerHTML = `<b> You will need  ${dresultHere}  to last you until the ripe age of  ${dmaxAge} </b>`;
}
