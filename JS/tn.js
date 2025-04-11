var phoneForm = document.getElementById("phoneForm");
var output = document.getElementById("output");

phoneForm.addEventListener('submit', (e) => {
    e.preventDefault();

    var telno = document.getElementById("telno").value.trim();
    var k = telno.replace(/[()]/g, " ").split(" ");
    var areacode=document.getElementById("areacode");
    areacode.innerHTML=
});
