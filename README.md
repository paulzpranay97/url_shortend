

# URL Shortener API
Overview
The URL Shortener API allows users to shorten long URLs and redirect to the original URLs using a shortened version. It includes basic user authentication features for secure access.

Features
Shorten URLs: Convert long URLs into short URLs.
Redirect: Access the original URL using the shortened version.
User Authentication: Register and log in to use the URL shortening service.
Technologies Used
Node.js: JavaScript runtime for server-side scripting.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing URLs and user information.
Mongoose: ODM library for MongoDB.
jsonwebtoken: For JWT-based authentication.
shortid: For generating unique short URLs.
Setup
Prerequisites
Node.js (v14 or later)
MongoDB
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/url-shortener-api.git
cd url-shortener-api
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory with the following contents:

env
Copy code
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongodb_connection_string
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:5000.

API Endpoints
User Authentication
Register
Endpoint: /api/auth/register
Method: POST
Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
Response:
json
Copy code
{
  "token": "JWT_TOKEN"
}
Login
Endpoint: /api/auth/login
Method: POST
Request Body:
json
Copy code
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
Response:
json
Copy code
{
  "token": "JWT_TOKEN"
}
URL Shortening
Shorten URL
Endpoint: /api/url/shorten
Method: POST
Headers:
Authorization: Bearer JWT_TOKEN
Request Body:
json
Copy code
{
  "originalUrl": "https://example.com"
}
Response:
json
Copy code
{
  "originalUrl": "https://example.com",
  "shortUrl": "short_id"
}
URL Redirection
Redirect to Original URL
Endpoint: /api/url/:shortUrl
Method: GET
URL Parameters:
shortUrl: The short URL code
Response:
Redirects to the original URL.
Error Handling
400 Bad Request: Malformed or illegal request.
401 Unauthorized: Token missing or invalid.
404 Not Found: No URL found for the given short URL.
500 Internal Server Error: Server-side errors.
Testing
Use tools like Postman or Thunder Client to test the API endpoints.

# POST /api/auth/register: Test user registration.
# POST /api/auth/login: Test user login and obtain JWT.
# POST /api/url/shorten: Shorten a URL using the obtained JWT.
# GET /api/url/
: Test redirection using the short URL.
