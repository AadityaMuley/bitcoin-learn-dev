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
