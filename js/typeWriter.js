const textArray =['apps','websites','softwares'];
                //we need two counters 
let count = 0;//a counter that goes throw each word one by one
let indexletter=0//index of the letter we are useing
let currentSelectedText="";
let  Letter ="";
let isDeleting=false;
            //self invoked function
(function type(){
    if(count===textArray.length){
        count=0;
    }
    currentSelectedText =textArray[count];
    if(isDeleting){
        Letter=currentSelectedText.slice(0,indexletter--);

    }else{
        Letter=currentSelectedText.slice(0,indexletter++);
    }
    document.querySelector('.typeEffect').textContent=Letter;
    if(Letter.length===currentSelectedText.length && !isDeleting){
        isDeleting=true;   
    }else if(isDeleting && Letter===''){
        count++;
        isDeleting=false;
        indexletter=0;
    }
    setTimeout(type,150);
})();