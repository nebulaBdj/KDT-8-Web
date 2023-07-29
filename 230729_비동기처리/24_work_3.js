// 콜백 지옥
// 1초마다 배경색이 변경되는 코드
// 빨 > 주 > 노 > 초 > 파
function change(col){
    return new Promise(function(resolve,reject){        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = col;
            resolve(col);
        },1000);
    });
    
}

change("red").then(function(col){
    col = "orange"; 
    return change(col);
}).then(function(){
    col = "yellow"; 
    return change(col);
}).then(function(){
    col = "green"; 
    return change(col);
}).then(function(){
    col = "blue"; 
    return change(col);
});


// setTimeout(function(){
//     document.querySelector("body").style.backgroundColor = "red";    
//     setTimeout(function(){
//         document.querySelector("body").style.backgroundColor = "orange";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor = "yellow";
//             setTimeout(function(){
//                 document.querySelector("body").style.backgroundColor = "green";
//                 setTimeout(function(){
//                     document.querySelector("body").style.backgroundColor = "blue";
//                     //처음봤을때 코드가 어떤 코드인지 이해하기가 어렵고 코드를 수정할때 어디서 수정해야하는지 헷갈릴 수 있다.
//                 },1000)   
//             },1000)
//         },1000)
//     },1000)
// },1000);