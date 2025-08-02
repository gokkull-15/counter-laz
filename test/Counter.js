const { expect } = require("chai"); 
describe("Counter", function () {  
it("Should increment the counter", async function () {  
const Counter = await ethers.getContractFactory("Counter");    
const counter = await Counter.deploy();    
await counter.waitForDeployment();     
await counter.increment();    
expect(await counter.getCount()).to.equal(1);
});
});