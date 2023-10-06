
# Encrypted time series Application
This is a Node.js-based application that generates and streams encrypted time-series data over a WebSocket connection, listens for incoming data streams, decrypts and validates the data, and saves it to a MongoDB database. It also includes a frontend component to display real-time data.

## Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your machine.
MongoDB installed and running.
Getting Started

### How to clone to local repository from github
git clone url
npm install

#### start the backend application:
cd backend
npm install
create .env file in backend
inside env file copy AES_KEY= 83935a8c6a5e4019a30db6cf1812ad561616cba94ed85e0025279b9dd0379236
node index.js


##### To start the frontend application:

cd frontend
npm install
npm start