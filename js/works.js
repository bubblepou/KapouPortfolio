function goTop() {
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    })
}

// 禁止右鍵及copy 
document.oncontextmenu = new Function("return false");
oncontextmenu="return false;";

document.body.oncopy = function(){
    event.returnValue=false;
}