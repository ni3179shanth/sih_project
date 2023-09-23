
let image=document.getElementById("image");
let qrimage=document.getElementById("qrimage");
let Text=document.getElementById("Text");
function generateQR(){
    if(Text.value.length>0)
    {qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+Text.value;
    image.classList.add("show-img");
}
else{
    Text.classList.add('error');
    setTimeout(()=>{
        Text.classList.remove('error');
    },1000);
    
}}