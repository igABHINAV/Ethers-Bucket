# Ether Bucket
#### deployed link : https://6577251173cf26008c2f8ef0--loquacious-griffin-f626c1.netlify.app/
#### backend link : https://ether-bucket.onrender.com
## Project Overview
Ether Bucket is a blockchain web development project that empowers collaborative finance and seamless transactions on the blockchain. The project is organized into three main directories: `client`, `server`, and `smart contract`.

## Project Structure

1. **client**
   - Description: The `client` directory contains the frontend code for the Ether Bucket application.

   - **app.js**
     - Description: Main application file for the frontend.
     - Functionality:
       - Imports necessary dependencies such as React, ethers, and routing components.
       - Connects to the Ethereum wallet(`METAMASK`) using the Web3Provider and ethers.
       - Initializes the provider, signer, contract, and connected address on wallet connection.
       - Sets up routes for different components: Pay, Cards, and ContryForm.

   - **Pay.js**
     - Description: React component for handling payments.
     - Functionality:
       - Manages user input for recipient address and payment amount.
       - Initiates a transaction to the smart contract for payment.
       - Displays a modal with transaction status and loading spinner.
     - Integration with ethers.js:
       - Imports necessary ethers components.
       - Uses `ethers.Contract` to create an instance of the smart contract.=
       - Sends transactions to the smart contract using the created instance.

   - **TranslucentCard.js**
     - Description: React component for displaying a funds or translucent card with a copyable address.
     - Functionality:
       - Renders a card with the provided title, description, and copyable address.
       - Allows users to copy the address to the clipboard.

   - **ContryForm.js**
     - Description: React component for submitting a form with address-related information ( fund making form) .
     - Functionality:
       - Renders a form with fields for address, title, and description.
       - Submits the form data to a specified endpoint and displays a success message.

2. **server**
   - Description: The `server` directory houses the server-side implementation for managing interactions with the frontend.

   - **index.js**
     - Description: Main server file handling API requests and serving the frontend.

     - Functionality:
       - Sets up necessary dependencies such as Express and CORS.
       - Defines API endpoints for handling frontend requests.
       - Handles requests to add  or retrieve data .
       - Serves the frontend code to clients.

   - **app.js**
     - Description: Express application setup for handling API routes.

     - Functionality:
       - Configures Express middleware for JSON parsing, URL encoding, and CORS.
       - Imports the route file (`fundroute.js`) and sets up routes.

   - **Routes/fundroute.js**
     - Description: Express route configuration for fund-related operations.

     - Functionality:
       - Defines routes for adding funds (`/add`) and retrieving funds (`/get`).
       - Utilizes controllers to handle the logic for adding and retrieving funds.

   - **Database/Connection.js**
     - Description: Database connection setup.

     - Functionality:
       - Configures and exports a function (`connectDB`) for connecting to the MongoDB database.

   - **Models/Fund.js**
     - Description: Mongoose model for the Fund collection.

     - Functionality:
       - Defines the schema for fund documents, including address, title, and description.

   - **Controllers/Fundcontroller.js**
     - Description: Controllers for handling fund-related operations.

     - Functionality:
       - **addFund:**
         - Accepts a POST request with address, title, and description.
         - Creates a new fund document in the MongoDB database.
         - Responds with the created fund.

       - **getFunds:**
         - Handles a GET request to retrieve all funds from the database.
         - Responds with the list of funds.

3. **smart contract**
   - Description: This directory contains the smart contract code responsible for the core functionality of Ether Bucket on the blockchain created using ether.js and hardhat , and deployed on sepolia testnet.

   - **Payment.sol**
     - Description: Smart contract for the Payment Gateway.
     - Functionality:
       - **PaymentGateway Contract:**
         - Manages a simple payment gateway.
         - `owner`: Address of the contract owner (deployer).
         - `constructor`: Initializes the contract owner.
         - `Payment`: Allows users to make payments to a specified receiver.
           - Parameters:
             - `receiver`: Address of the payment recipient.
           - Requirements:
             - Requires a valid recipient address.
             - Transfers the provided amount to the receiver.

   - **hardhat.config.js**
     - Description: Hardhat configuration file for deploying and testing the smart contracts.
     - Functionality:
       - Configures the Solidity version and network settings for Hardhat.
       - Loads environment variables (API_URL, PRIVATE_KEY) for network configuration.
       - Defines the default network as "sepolia" with corresponding URL and private key.

4. **PaymentGateway.json**
   - Description: Artifact file generated by Hardhat for the PaymentGateway smart contract.
   - Contains information about the contract's ABI, bytecode, and deployment details.

5. **.env**
   - Description: Environment configuration file for storing sensitive information.

