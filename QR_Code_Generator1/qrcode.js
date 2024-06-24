// alert("Ravi");
// var btn=document.getElementById("btn");
function clicked(){
    let input=document.getElementById("inputtext");
    let value=input.value;
    let img=document.getElementById("img1");
    let imgsrc="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+value;
    img.src=imgsrc;
}