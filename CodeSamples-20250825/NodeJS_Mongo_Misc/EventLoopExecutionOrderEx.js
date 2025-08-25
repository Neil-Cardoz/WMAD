console.log('This should execute first.');
setTimeout(()=>console.log('This should be third.'), 0);
const promiseVal = Promise.resolve('This should be second.');
promiseVal.then(value=>{console.log(value)});
console.log('Rest of the code executes after this.');