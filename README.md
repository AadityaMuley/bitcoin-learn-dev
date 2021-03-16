# Learn Blockchain by building one

### Recreating Bitcoin like Blockchain to learn the intricacies of developing Blockchain guided by ***Bitcoin Whitepaper published by Satoshi Nakamoto***

Commands to setup the required environment (assuming you have nodejs and npm pre-installed):

- create a folder with a name of your choice:
```
    mkdir bchain-learn
```
- navigate to that folder:
```
    cd bchain-learn
```
- use npm to create package,jason file which will have details about the project (-y answers yes to all interactive questions on terminal):
```
    npm init -y
```
- install development dependancy - nodemon. nodemon along with npm capabilities has inbuilt live server capabilities which completely reloads and restarts our project when we make any changes:
```
    npm i nodemon --save-dev
```
- add this line to package.json script after putting a comma (since name of file is dev-test.js):
```
    "dev-test": "nodemon dev-test"
```
- to run the the development server:
```
    npm run dev-test
```
- Add crypto-js module to npm which has SHA-256 algorithm prebuilt:
```
    npm - crypto-js --save
```
- install test runner - jest(executes testing files in JS project. it looks for testing files with test.js extension - we have created block.test.js):
```
    npm i jest --save-dev
```
- run jest testing:
```
    npm run test
```
- Add the express module to npm which is required to build our API:
```
    npm i express  --save
```
- running the dev:
  - run the express app on default port 3001: ` npm run dev `
  - run the express app on custom port: ` HTTP_PORT=*MENTION PORT NUMBER* npm run dev `
- Install Postman according to your Operating System - Google it if you are unfamiliar - run the follwing GET request and press send (ensure step 10 is running in the baground):
```
    localhost:3001/blocks
```
- Add body parser module - it has middleware function which allows us to receive JSON data within POST request in our express app from the users who create those post requests:
```
    npm i body-parser --save
```
- Goto Postman and do the following:
  - add a new POST request tab
  - enter request URL: `localhost:3001/mine`
  - goto Body (below request URL)
  - click on raw
  - select file format as "JSON" from the dropdown menu
  - add the data:
  ```
        {
            "data": "random-1"
        }
  ```
