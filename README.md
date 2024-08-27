# User Management System

## Description

This project implements a full-stack application for managing user data with filtering, searching, and pagination support. It also includes team-related operations. The frontend is built with React.js, Redux Toolkit, and Tailwind CSS, while the backend is built with Node.js, Express.js, and MongoDB.

## Features

### Frontend

- Display users in cards format with pagination.
- Search users by name.
- Filter users by domain, gender, and availability.
- Create a team by selecting users with unique domains and availability.
- Display team details.

### Backend

- CRUD operations for user data.
- Create and retrieve team details.
- Pagination support for user data retrieval.

## Frontend Setup

1. Clone the repository.
2. Navigate to the [`frontend`]directory.
3. Run [`npm install`] to install dependencies.
4. Run [`npm start`] to start the development server.

## Backend Setup

1. Clone the repository.
2. Navigate to the [`backend`]directory.
3. Run [`npm install`] to install dependencies.
4. Create a `.env` file and add your MongoDB URI and other environment variables.
5. Run [`npm run dev`] to start the development server.

## Frontend Technologies Used

- React.js
- Redux Toolkit
- Tailwind CSS
- Axios

## Backend Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- express-validator
- mongoose-paginate-v2

## API Endpoints

### User Endpoints

- [`GET /api/users`]: Retrieve all users with pagination support.
- [`GET /api/users/:id`]: Retrieve a specific user by ID.
- [`POST /api/users`]: Create a new user.
- [`PUT /api/users/:id`]
- [`DELETE /api/users/:id`]: Delete a user.

### Team Endpoints

- [`POST /api/team`]: Create a new team by selecting users from the list with unique domains and availability.

- [`GET /api/team/:id`]: Retrieve the details of a specific team by ID.
