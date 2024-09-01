# API Bank

The program allows you to create bank accounts, deposit money into them and make money transfers between accounts.

# Used

-   Express.js

# How to use

Would like to run this project locally? Open terminal and follow these steps:

1.  Clone the repo

    ```sh
    git clone https://github.com/JurguteJak/50-gr-bank-api.git

    ```

2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the server

        ```sh
        npm run dev
        ```

    Make sure you have a script named `dev` in your `package.json` that starts the server. It might look like this:
    `json
"scripts": {
  "dev": "node index.js"
}
`

# HTTP Method:

-   `GET`
-   `POST`
-   `DELETE`
-   `PUT`

# Data transfer

-   `name`: string
-   `surname`: string
-   `date of birth (dob)`: string (format: yyyy-mm-dd)

# Requirements

-   only adults (18 years and older) can create an account.
-   the combination of name and surname must be unique

# Endpoints example

1. Create a New Account

-   **URL:** `/api/account`
-   **Method:** `POST`
-   **Description:** Creates a new account with the provided details.
-   **Request Body:**
    ```json
    {
        "name": "John",
        "surname": "Doe",
        "birthDate": "1988-08-01"
    }
    ```
-   **Sample Response:**
    ```json
    {
        "message": "Paskyra sukurta"
    }
    ```

## 🎅 Authors

Jurgita: [Github](https://github.com/JurguteJak)
