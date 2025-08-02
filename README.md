# Counter Smart Contract

This project implements a simple Counter smart contract using Hardhat. The Counter contract allows users to increment, decrement, and view a counter value stored on the blockchain.

## Contract Overview

The `Counter.sol` contract provides the following functionality:
- **Increment**: Increases the counter value by 1
- **Decrement**: Decreases the counter value by 1  
- **Get Count**: Returns the current counter value

## Contract Functions

```solidity
function increment() public        // Increases counter by 1
function decrement() public        // Decreases counter by 1
function getCount() public view returns (uint256)  // Returns current count
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd counter-project
```

2. Install dependencies
```bash
npm install
```

### Usage

#### Running Tests
```shell
npx hardhat test
```

#### Deploy to Local Network
```shell
# Start local Hardhat network
npx hardhat node

# Deploy the Counter contract
npx hardhat ignition deploy ./ignition/modules/Counter.js --network localhost
```

#### Other Useful Commands
```shell
npx hardhat help
REPORT_GAS=true npx hardhat test
npx hardhat compile
```

## Contract Details

- **License**: MIT
- **Solidity Version**: ^0.8.0
- **Initial Count**: 0 (starts at zero)

## Testing

The project includes comprehensive tests for the Counter contract functionality. Run `npx hardhat test` to execute all tests and verify the contract works as expected.
