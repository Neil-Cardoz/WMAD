function displayMsg(msg)
{
    console.log(msg);
}
console.log("Let's prepare breakfast and coffee.");
const promise1 = Promise.resolve("Fruits first!");
promise1.then((m)=>{displayMsg(m)});
setTimeout(()=>{displayMsg("It takes 4 mins to boil an egg."), 240000});
setTimeout(()=>{displayMsg("3 minutes to brew some coffee."), 180000});
const resolvedPromise = Promise.resolve("Let me make some coffee in the mean while.");
resolvedPromise.then(value=>{displayMsg(value)});
console.log("Is my egg ready?");
