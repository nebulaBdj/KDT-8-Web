function cPrice(){
    let iceArray = document.getElementByName('price');//프라이스의 이름을 가지고 있는 span을 배열로 가져옴
    let priceArray = new Array();
    for(let i; i<iceArray; i++){
        if(iceArray[i].checked == true){
            let si = iceArray[i].id.replace('ice','price');
            let pT = document.getElementById(si).innerText;
            priceArray.push(pT);
        }
    }

    let total = 0;

    for(let i=0; i < priceArray.length; i++){
        total += parseInt(priceArray[i]);
    }

    document.getElementById('sum').innerText = total;

}