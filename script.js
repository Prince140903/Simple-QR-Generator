let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");
let imgbox = document.getElementById("imgbox");

function generateQR(){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }
