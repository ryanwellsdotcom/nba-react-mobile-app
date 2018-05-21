# NBA React Mobile App

Proof-of-concept for a React-based mobile application.

#### 1. Requirements 

Ensure Node (with npm) are installed. You can determine this by running the terminal commands:
```sh
$ node -v
$ npm -v
```

You should see a version number for each. If not, refer to the following steps: 
  * For installing node, visit: https://nodejs.org/en/download/

#### 2. Clone the project

Once you've added your SSH key to GitHub, clone the project into a folder of your choice:
```sh
$ git clone git@github.com:ryanwellsdotcom/nba-react-mobile-app.git
```

#### 3. Install dependencies

CD into the project folder and run npm install:
```sh
$ cd edi
$ npm install
```

This will install all of the packages required to build the project.

#### 4. Start the project for development

To start the project and watch for changes, run:
```sh
$ npm run start
```

To start the JSON server, open a second bash terminal and run:
```sh
$ npm run api
```

Ctrl C will stop the dev server.

#### 5. Build the project for production

To build the project for production, run:
```sh
$ npm build
```

All of the production assets will be placed in a 'build' directory.
<br/>
<br/>
