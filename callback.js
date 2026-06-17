let prm = new Promise((resolve, reject) =>{
    console.log("Executor function is Executed....");
    resolve("married");

});
prm.then(() =>{
    console.log("succesfully married ");
});
prm.catch(() =>{
    console.log("unsuccessfull marriege");
});
console.log(prm);
