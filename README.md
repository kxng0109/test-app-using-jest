# Blog App

A basic eCommerce application developed with Node.js, focusing on CRUD operations and showcasing automated testing using Jest. The application integrates a MongoDB database and demonstrates robust testing practices to ensure functionality.

## Table of Contents

- <a href="#features">Features</a>
- <a href="#technologies-used">Technologies Used</a>
- <a href="#prerequisites">Prerequisites</a>
- <a href="#installation">Installation</a>
- <a href="#environment-variables">Environment Variables</a>
- <a href="#usage">Usage</a>
- <a href="#testing">Testing</a>
- <a href="#license">License</a>

## Features

- **Basic eCommerce functionality**:
	-Create, read, update, and delete (CRUD) operations for products.
- **MongoDB Integration**:
	- Stores and retrieves product data efficiently.
- **Testing with Jest**:
	- Comprehensive testing for routes and database operations.
- **Environment-Specific Configurations**:
	- Uses dotenv and cross-env for environment management.

## Technologies Used

- Node.js
- Express.js
- MongoDB (via ```mongoose```)
- Jest (testing framework)
- Supertest (for HTTP assertions)
- cross-env (for environment variable management)
- dotenv (to manage environment variables)

## Prerequisites

Ensure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or hosted)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
	```bash
	git clone https://github.com/kxng0109/test-app-using-jest.git
	cd test-app-using-jest
	```

2. Install dependencies:
	```bash
	npm install
	```

3. Set up environment variables (see <a href="#environment-variables">Environment Variables</a>).

4. Start the development server:
	```bash
	npm run dev
	```

## Environment Variables

Create a .env file in the root directory with the following variables:
```plaintext
MONGODB_URI=<link_to_mongodb_database>
PORT=3000
```
Replace <link_to_mongodb_database> with the path to your mongoDB database
Note: Never push your .env file to version control.

## Usage

1. Start the server:
```bash
npm start
```

2. Use tools like Postman or curl to test API endpoints, or use the integrated Jest tests to validate functionality.

3. Access the application via:
```plaintext
http://localhost:PORT
```
Note: "PORT" is set to 3000 by default.

3. Use tools like Postman to test API endpoints.

## Testing

The primary focus of this application is its testing capabilities. Testing is implemented using Jest and Supertest.

1. To run all tests:
```bash
npm test
```

2. Test scripts:
- Unit tests: Validate individual functions and components.
- Integration tests: Verify API endpoints and database interactions.

### Test command
The ```test``` script sets the environment to ```test``` and executes Jest:
```bash
cross-env NODE_ENV=test jest --testTimeout=5000
```

## License
This project is licensed under the MIT License - see the <a href="/LICENSE">LICENSE</a> file for details.
