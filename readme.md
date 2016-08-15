                            React Timer App

********************************************************************************
********************************************************************************


Instructions

Download / Clone the application
Open bash in ReactWeather folder
Run npm install in node.js to install all the dependancies in node_modules (created automatically)
Run node server.js to start the server
Open browser, goto 'localhost:3000'

********************************************************************************
********************************************************************************

Access App Directly on: http://evening-inlet-82305.herokuapp.com/#/?_k=5ezr9x

********************************************************************************
********************************************************************************

NPM Command for Tools (Don't require as it is included in package.json)
1. npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev

2. npm install react-addons-test-utils@0.14.7 --save-dev
Note: This has to match with version of react and react dom. In this case, it is 0.14.7 (can be found in package.json) 

********************************************************************************
********************************************************************************

Karma Config File is a file that specifies how we want to run a test.
brosers => Use Chrome browser
frameworks => Use Mocha framework
files & preprocessors => Which files to test and which preprocessors to use like webpack and sourcemap
reporters => Help us clean output   
