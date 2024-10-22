## Installation

To run the second gear API locally, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org) installed on your machine.
2. Clone this repository to your local machine using the following command:

```
git clone https://github.com/mohammed-ansar/SecondGear
```


3. Navigate to the project's root directory:

```
cd Task-1
```


4. Install the required dependencies using npm:

```
npm install
```


5. Create a `.env` file in the project's root directory and define the following environment variables:

```
PORT = 3001
DATABASE =  your_mongodb_uri
ACCESS_SECRET = 'authsecretkey1'
REFRESH_SECRET = 'authsecretkey2'
ACCESS_EXPIRY = '15m'
REFRESH_EXPIRY = '24h'  
```


Replace `authsecretkey1` and `authsecretkey2` with a secure secret key for JWT token encryption and `your_mongodb_uri` with the connection URI for your MongoDB database.

6. Start the Node.js server:
```
npm start
```

7. The API will be running on `http://localhost:3001`, and it is ready to be used by the product browsing web app.
