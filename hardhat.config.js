require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 
module.exports = {  
solidity: "0.8.28",  
networks: {    
hardhat: {      
chainId: 31337,    
},    
lazai: {      
url: "https://lazai-testnet.metisdevops.link",      
chainId: 133718,      
accounts: [process.env.PRIVATE_KEY],    
},  
},
};