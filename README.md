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

    - URL: `/api/account`
    - Method: `POST`
    - Description: Creates a new account with the provided details.
    - Request Body:

    ```json
    {
        "name": "John",
        "surname": "Doe",
        "birthDate": "1988-08-01"
    }
    ```

    - Sample Response (if account is successfully created):

    ```json
    {
        "message": "Paskyra sukurta"
    }
    ```

    - Sample Response (if any required information is missing):

    ```json
    {
        "message": "Trūksta reikalingos informacijos."
    }
    ```

    - Sample Response (if the user is not an adult):

    ```json
    {
        "message": "Sąskaitą gali susikurti tik pilnamečiai asmenys (18m. ir daugiau)"
    }
    ```

    - Sample Response (if an account with the same name and surname already exists):

    ```json
    {
        "message": "Sąskaita su tokiu vardu jau egzistuoja"
    }
    ```

2. Delete Account

    - URL: `/api/account/:fullName`
    - Method: `DELETE`
    - Description: Deletes the account if the balance is zero.
    - Request Example:
        - URL: `http://localhost:3000/api/account/john-doe`
    - Sample Response (if account is deleted):

    ```json
    {
        "message": "Sąskaita sėkmingai ištrinta"
    }
    ```

    - Sample Response (if account is not found):
        ```json
        {
            "message": "Tokia paskyra nerasta"
        }
        ```
    - Sample Response (if account has a non-zero balance):
        ```json
        {
            "message": "Sąskaitos ištrinti negalima, nes balansas nėra lygus nuliui"
        }
        ```

3. Get Account Name

    - URL: `/api/account/:fullName/name`
    - Method: `GET`
    - Description: Retrieves the name of the account owner by full name.
    - Request Example:
        - URL: `http://localhost:3000/api/account/john-doe/name`
    - Sample Response:
        ```json
        {
            "name": "John"
        }
        ```

4. Get Account Surname

    - URL: `/api/account/:fullName/surname`
    - Method: `GET`
    - Description: Retrieves the surname of the account owner by full name.
    - Request Example:
        - URL: `http://localhost:3000/api/account/john-doe/surname`
    - Sample Response:
        ```json
        {
            "surname": "Doe"
        }
        ```

5. Get Account Date of Birth

    - URL: `/api/account/:fullName/dob`
    - Method: `GET`
    - Description: Retrieves the date of birth of the account owner by full name.
    - Request Example:
        - URL: `http://localhost:3000/api/account/john-doe/dob`
    - Sample Response:
        ```json
        {
            "birthDate": "1988-08-01"
        }
        ```

## 🎅 Authors

Jurgita: [Github](https://github.com/JurguteJak)
