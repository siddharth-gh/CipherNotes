CipherNotes
===========

CipherNotes is a secure and efficient notes application built using modern web technologies. This app allows users to create, edit, and delete notes while ensuring data privacy and security.

Features
--------

-   **Secure Authentication**: User registration and login with JWT authentication.
-   **Create, Read, Update, Delete (CRUD) Notes**: Full functionality to manage notes.
-   **Encryption**: Notes are encrypted to ensure privacy.
-   **Responsive Design**: Mobile-friendly and accessible interface.
-   **Search**: Easily search through notes.

Technologies Used
-----------------

-   **Frontend**: React, Redux, iconify
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Authentication**: JWT (JSON Web Token)
-   **Encryption**: Bcrypt.js

Installation
------------

### Prerequisites

-   Node.js (v12 or later)
-   MongoDB

### Steps

1.  **Clone the repository**

    sh

    `git clone https://github.com/siddharth-gh/cipherNotes`

2.  **Install dependencies**

    -   Backend

        `cd backend
        npm install`

    -   Frontend

        `cd ../frontend
        npm install`

3.  **Environment Variables**

    Create a `.env` file in the `backend` directory and add the following:

    `PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret`

4.  **Run the application**

    -   Start the backend server

        `cd backend
        npm start`

    -   Start the frontend development server

        `cd ../frontend
        npm start`

    The application should now be running on `http://localhost:3000`.

Usage
-----

1.  **Register/Login**

    -   Create a new account or log in with existing credentials.
2.  **Create a Note**

    -   Click on the "Add Note" button and fill in the details.
3.  **Edit a Note**

    -   Click on the note you wish to edit and update the information.
4.  **Delete a Note**

    -   Click on the delete icon on the note you wish to delete.
5.  **Search Notes**

    -   Use the search bar to find notes by title or content.


Contact
-------

Siddharth Suman - 037.siddharth@gmail.com

Project Link: <https://github.com/siddharth-gh/cipherNotes>
