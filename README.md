## Full-Stack Exchange Office Application - Dockerized

Application meant to be used by cashiers in an exchange office, or at home to track personal finances.
This is a dockerized version of my slightly modified frontend and backend with added database initialization.
Links to seperate non-docker repositories are provided down below.

## Project Specification

- Frontend:
    - Made using HTML, CSS, JavaScript, ReactJS, TailwindCSS
    - Login form checked with regular expressions and a POST request is sent to the API
    - Header with functional links that open their respectful modal and a logout button
    - Input and Output link used for putting in and taking out money from the cash register
    - Exchange link used for exchanging user specified ammount of one currency to another with a specified rate
    - Input, Output and Exchange forms send a PUT request to the API
    - Display of currencies and their ammount meant to represent money in stock
    - Table of successful transactions
    - Footer that displays currently logged in worker
    - Currency and Transaction data is fetched from the API using a GET request
    - Sorting transactions in ascending or descending order done locally by clicking the table header of the column by which you want to sort data
    - Filtering transactions by sending selected parameters to the API and displaying the data recieved back
    - Admin Panel for users that have the admin role where admins can:
        - Add a new user
        - Edit existing users
- Backend:
    - Made using NodeJS and ExpressJS
    - Connection to the MongoDB
    - /login route for POST requests that handles users trying to login
    - /transactions route for GET requests that handles fetching data from the transaction collection
    - /currencies route for GET requests that handles fetching data from the currencies collection
    - /transactions/new route for PUT requests that handles inserting data in transaction and updating data in currencies collection
    - /transactions/filtered route for POST request that handles fetching certain transaction data from the database based on the data recieved from the client
    - /admin/adduser route for POST requests that handles inserting a new user into the users collection
    - /admin/changeuser route for POST requests that handles updating specified users data
    - /admin/fetchusers route for POST requests that handles fetching data from the users collection
    - /admin/activateuser route for POST requests that handles updating specified users status
    - Use of jsonwebtoken and cookies for authentication when trying to access certain routes
    - Check if the user trying to access admin only routes is authorized
    - Password encryption when storing in the database using scrypt
- Database:
    - 'users' collection for storing user data
    - 'currencies' collection for storing available currencies and their ammount
    - 'transactions' collection for storing every transaction done

## Usage

- Clone the repository
- Run `docker compose up`
- Open `localhost:5173` in your browser and login with `admin/admin`
- Optional: You can also add a user to the database by running `npm run user` from the API terminal

## Frontend Repository

- https://github.com/stefansto/exchange-office-app

## Backend Repository

- https://github.com/stefansto/exchange-office-api