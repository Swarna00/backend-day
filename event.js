let EvenEmitter = require('events');

let emitter = new EvenEmitter();
emitter.on("done", ()=>{
    console.log("10000tk")
})

setTimeout(() =>{
    emitter.emit("done");
}, 2000)