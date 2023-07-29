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

// call('kim').then(function(name){
//     console.log(name + "반가워");
//     return back(name);
// }).then(function(result){
//     console.log(result + "를 실행했구나");
//     return hell(result);
// }).then(function(result){
//     console.log("여기는" + result);
// });


async function exec() {
    let a = await call("kim");
    console.log(a + "반가워");
    let b = await back();
    console.log(b + "를 실행했구나");
    let c =await hell();
    console.log("여기는" + c);
}

exec();