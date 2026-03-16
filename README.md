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
- **Portfolio Hero** with headshot, greeting, and resume/contact actions.
- **About Me Section** with summary and skills card blocks.
- **Experience & Education** timeline sections with modern visual style.
- **Projects Section** with project cards and live demo + GitHub links.
- **Contact Section** with email, LinkedIn, GitHub, and social links.
- **Responsive layout** for desktop and mobile.

## Run Locally
### Prerequisites
- Node.js + npm

### Start Frontend
```bash
git clone https://github.com/kathanpatel29/PortfolioWeb.git
cd PortfolioWeb/frontend
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### Start Backend (optional for dynamic API)
```bash
cd PortfolioWeb/backend
npm install
npm run dev
```
By default, backend uses port `5000`.

## Project Structure
- `frontend/` → React + Vite portfolio UI
  - `src/components` → UI sections (Home, About, Skills, Experience, Education, Projects, Contact)
  - `src/data` → personal content data and labels
  - `src/assets` → images and icons
- `backend/` → Node.js/Express API with MongoDB

## About This Portfolio
This project is a personal portfolio website for showcasing your experience, education, technical skills, projects, and contact details in a clean, modern style. It includes:
- Data-driven sections powered by reusable components
- Timeline component for education and experience
- Project cards with demo/GitHub actions
- Responsive navigation and mobile menu

## Updating Content
Edit content in the `frontend/src/data/` files:
- `title.js` (labels, headings)
- `about.js` (intro text)
- `experience.js`, `education.js`, `project.js`, `skill.js`

## License
MIT

## Contact
Kathan Patel - [LinkedIn](https://www.linkedin.com/in/kathan-patel-29/)
GitHub: [github.com/kathanpatel29/PortfolioWeb](https://github.com/kathanpatel29/PortfolioWeb)
