// function call(name, cb) {
//     setTimeout(function(){
//         console.log(name);
//         cb(name);
//     },1000);
// }

// function back(cb) {
//     setTimeout(function(){
//         console.log("back");
//         cb("back");
//     },1000);
// }

// function hell(cb) {
//     setTimeout(function(){
//         cb("callback hell");
//     },1000);
// }

// call("kim", function(name) {
//     console.log(name + "반가워");
//     back(function(txt){
//         console.log(txt + "를 실행했구나");
//         hell(function(message){
//             console.log("여기는"+message);
//         });
//     });
// });

//promise 변환
// function call(name) {
//     return new Promise (function(resolve, reject){
//         setTimeout(function(){
//             console.log(name);
//             // cb(name);
//             resolve(name);
//         },1000);        
//     })

// }

// function back(n) {
//     return new Promise (function(resolve, reject){
//         setTimeout(function(){
//             n = "back"
//             console.log(n);
//             // cb("back");
//             resolve(n);
//         },1000);        
//     })

// }

// function hell(m) {
//     return new Promise (function(resolve, reject){
//         setTimeout(function(){
//             m = "callback hell";
//             // cb("callback hell");
//             resolve(m);
//         },1000);        
//     })

// }

// call('kim').then(function(name){
//     console.log(name + "반가워");
//     return back(name);
// }).then(function(txt){
//     console.log(txt + "를 실행했구나");
//     return hell(txt);
// }).then(function(message){
//     console.log("여기는" + message);
// });



//promise 변환 2
function call(name) {
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            console.log(name);
            // cb(name);
            resolve(name);
        },1000);        
    })

}

function back() {
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            
            console.log("back");
            // cb("back");
            resolve("back");
        },1000);        
    })

}

function hell() {
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            // cb("callback hell");
            resolve("callback hell");
        },1000);        
    })

}

call('kim').then(function(name){
    console.log(name + "반가워");
    return back(name);
}).then(function(result){
    console.log(result + "를 실행했구나");
    return hell(result);
}).then(function(result){
    console.log("여기는" + result);
});

