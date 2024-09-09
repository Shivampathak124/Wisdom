# wisdom

# Job Application API

This is a **RESTful API** built using **Node.js**, **Express**, and **MongoDB** to manage job positions, applicants, and interviews for a company. It allows the HR team to handle job postings, track applicants' progress, and schedule interviews efficiently.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Endpoints](#endpoints)
  - [Jobs](#jobs)
  - [Applicants](#applicants)
  - [Interviews](#interviews)
- [Authentication (Login)](#authentication-login)
- [Testing with Postman](#testing-with-postman)
- [Database Schema](#database-schema)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **Job Positions**: Create and list job positions available at the company.
- **Applicants**: Manage applicants' details, including tracking their status (Pending, Interviewed, Hired, Rejected).
- **Interviews**: Schedule interviews and track interview details.
- **Input Validation**: Ensures all required fields are provided with correct formats (e.g., email validation).
- **Authentication**: JWT-based authentication to secure the API routes.
- **MongoDB Integration**: Stores job, applicant, and interview information in a NoSQL database.

## Project Structure

The project follows a modular structure, organizing routes, models, and controllers separately to maintain clarity and scalability.

```plaintext
├── models            # Mongoose schemas for Job, Applicant, and Interview
│   ├── Job.js
│   ├── Applicant.js
│   └── Interview.js
├── routes            # Express routes for Jobs, Applicants, Interviews
│   ├── jobs.js
│   ├── applicants.js
│   └── interviews.js
├── index.js          # Main server file
├── package.json      # Project dependencies
└── README.md         # Project documentation


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/job-application-api.git
  
