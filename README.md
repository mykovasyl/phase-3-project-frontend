# Chores Game

This application was built as a 3rd project for Flatiron's Software Engineering bootcamp. The front end mimics what a parent would see on their side of the login. Since logins are not currently part of the curriculum, several aspects of the application remain unfinished for a later time. 

## Back End 

The backend is built on Ruby and uses ActiveRecord for the models. [Backend](https://github.com/mykovasyl/phase-3-sinatra-react-project-backend)

## Components

### ChoreList + ChoreRow

Chore List creates two tables, one for current and one for completed chores, using the Chore Row component to create each line on the tables.

### AssignChores

Here chores are assigned to children using the child's ID to keep track of which chores are assigned to who.

### ChildrenList + ChildRow

A list of all children in the household generated through ChildRow, where you can add and delete children. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


