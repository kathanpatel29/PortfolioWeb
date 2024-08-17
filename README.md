# PortfolioWeb

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/kathanpatel29/PortfolioWeb/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/kathanpatel29/PortfolioWeb.svg)](https://github.com/kathanpatel29/PortfolioWeb/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/kathanpatel29/PortfolioWeb.svg)](https://github.com/kathanpatel29/PortfolioWeb/network)
[![GitHub issues](https://img.shields.io/github/issues/kathanpatel29/PortfolioWeb.svg)](https://github.com/kathanpatel29/PortfolioWeb/issues)

PortfolioWeb is a full-stack web application designed to showcase projects and skills in a personalized portfolio. The application is built with a React frontend and a Node.js/Express backend, connected to a MongoDB database.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Dynamic Project Display:** Add, update, and delete projects to keep your portfolio current.
- **Skill Showcase:** Display your skills with icons, and easily update your skill set.
- **Responsive Design:** The application is fully responsive, providing a great user experience on all devices.
- **Backend Integration:** Fully functional backend to manage project and skill data.

## Installation

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** and **npm**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

### Setup and Run the Application
1. **Clone the Repository**:  
   Start by cloning the repository to your local machine and navigating into the project directory.

   `git clone https://github.com/kathanpatel29/PortfolioWeb.git`  
   `cd PortfolioWeb`

2. **Backend Setup**:
   1. Navigate to the `backend` directory:  
      `cd backend`
   2. Install the necessary dependencies:  
      `npm install`
   3. Create a `.env` file in the `backend` directory and add your MongoDB URI and other environment variables:  
      `touch .env`

      Open the `.env` file in your preferred text editor and add the following variables:

      ```env
      DBUSER=yourMongoDBUsername
      DBPWD=yourMongoDBPassword
      DBHOST=yourMongoDBClusterURL
      PORT=5000
      ```

      Replace `yourMongoDBUsername`, `yourMongoDBPassword`, and `yourMongoDBClusterURL` with your actual MongoDB credentials.

   4. Start the MongoDB server:  
      If you're running MongoDB locally, start it with `mongod`. If you're using MongoDB Atlas, ensure your connection string in the `.env` file is correct.

   5. Run the backend server:  
      `npm run dev`  
      The server should start, and you should see a message indicating that it is running on the specified port (default: 5000).

3. **Frontend Setup**:
   1. Navigate to the `frontend` directory:  
      `cd ../frontend`
   2. Install the necessary dependencies:  
      `npm install`

   3. Run the frontend development server:  
      `npm run dev`  
      The frontend server should start, and you can view the application in your browser at `http://localhost:3000`.

## Usage
1. Open your browser and go to `http://localhost:5000`.
2. Use the interface to add, update, and delete projects and skills.
3. The application will automatically interact with the backend to store your data in the MongoDB database.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
Kathan Patel - [LinkedIn](https://www.linkedin.com/in/kathan-patel-29/)  
GitHub Repository: [https://github.com/kathanpatel29/PortfolioWeb](https://github.com/kathanpatel29/PortfolioWeb)
