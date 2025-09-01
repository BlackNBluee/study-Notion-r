# StudyNotion - Empowering Education with Technology
🚀 [Visit StudyNotion Website][https://study-notion-edtech.netlify.app/]

![StudyNotion Main Page](images/Mainpage.jpg.jpeg)

StudyNotion stands as a robust EdTech platform, seamlessly bridging the gap between creators and consumers of educational content. Developed on the MERN stack—leveraging ReactJS, NodeJS, MongoDB, and ExpressJS—it offers a dynamic and interactive learning experience.

## Table of Contents

- [Introduction](#introduction)
- [System Architecture](#system-architecture)
  - [Front-end](#front-end)
  - [Back-end](#back-end)
  - [Database](#database)
  - [Architecture Diagram](#architecture-diagram)
- [API Design](#api-design)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Introduction

StudyNotion is a mission-driven platform, dedicated to enhancing accessibility and engagement in education. It serves as a global stage for instructors to showcase expertise and connect with learners, fostering a vibrant community of knowledge exchange.

This documentation delves into the technical intricacies, covering system architecture, API design, installation guidelines, usage instructions, and future enhancement possibilities.

## System Architecture

The StudyNotion EdTech platform comprises three core elements: the front-end, the back-end, and the database. The platform adopts a client-server architecture, with the front-end acting as the client and the back-end and database as the server.

### Front-end

Built on ReactJS, the front-end ensures a dynamic and responsive user interface—a cornerstone for an engaging learning experience. Seamless communication with the back-end is achieved through RESTful API calls.

#### Front End Pages

**For Students:**

- **Homepage:** Introduction to the platform with links to the course list and user details.
- **Course List:** Comprehensive list of available courses with descriptions and ratings.
- **Wishlist:** Displays courses added to a student's wishlist.
- **Cart Checkout:** Facilitates course purchases.
- **Course Content:** Presents course content, including videos and related material.
- **User Details:** Displays account details.
- **User Edit Details:** Allows students to edit account details.

**For Instructors:**

- **Dashboard:** Overview of the instructor's courses, along with ratings and feedback.
- **Insights:** Detailed metrics for instructor's courses, such as views and clicks.
- **Course Management Pages:** Facilitates course creation, updates, and deletion, along with content and pricing management.
- **View and Edit Profile Details:** Allows instructors to manage account details.

#### Front-end Tools and Libraries

The front-end employs ReactJS, CSS, and Tailwind for styling, with state management handled by Redux.

### Back-end

The back-end of the platform is built using NodeJS and ExpressJS, providing APIs for the front-end to consume. These APIs include functionalities such as user authentication, course creation, and course consumption. The back-end also handles the logic for processing and storing the course content and user data.

#### Back-end Features

- **User Authentication and Authorization:** Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
- **Course Management:** Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
- **Payment Integration:** Students will purchase and enroll in courses by completing the checkout flow, followed by Razorpay integration for payment handling.
- **Cloud-based Media Management:** StudyNotion uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
- **Markdown Formatting:** Course content in document format is stored in Markdown format, allowing for easier display and rendering on the front-end.

#### Back-end Frameworks, Libraries, and Tools

The back-end of StudyNotion uses various frameworks, libraries, and tools to ensure its functionality and performance, including:

- **Node.js:** Used as the primary framework for the back-end.
- **Express.js:** Used as a web application framework, providing a range of features and tools for building web applications.
- **MongoDB:** Used as the primary database, providing a flexible and scalable data storage solution.
- **JWT (JSON Web Tokens):** Used for authentication and authorization, providing a secure and reliable way to manage user credentials.
- **Bcrypt:** Used for password hashing, adding an extra layer of security to user data.
- **Mongoose:** Used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.

#### Data Models and Database Schema

The back-end of StudyNotion uses several data models and database schemas to manage data, including:

- **Student Schema:** Includes fields such as name, email, password, and course details for each student.
- **Instructor Schema:** Includes fields such as name, email, password, and course details for each instructor.
- **Course Schema:** Includes fields such as course name, description, instructor details, and media content.

### Database

The database for the platform is built using MongoDB, a NoSQL database that provides a flexible and scalable data storage solution. MongoDB allows for the storage of unstructured and semi-structured data. The database stores the course content, user data, and other relevant information related to the platform.

![Database Schema](images/schema.png)

### Architecture Diagram

Below is a high-level diagram that illustrates the architecture of the StudyNotion EdTech platform:

![Architecture](images/architecture.png)

## API Design

The StudyNotion platform's API is designed following the REST architectural style. The API is implemented using Node.js and Express.js. It uses JSON for data exchange and follows standard HTTP request methods such as GET, POST, PUT, and DELETE.

For detailed API documentation and endpoints, refer to the [API Documentation](/api-docs).

## Installation

1. Clone the repository: `git clone https://github.com/shreyas-2046/StudyNotion.git`
2. Navigate to the project directory: `cd StudyNotion`
3. Install dependencies: `npm install`

## Configuration

1. Set up a MongoDB database and obtain the connection URL.
2. Create a `.env` file in the root directory with the following environment variables:

   
## Usage

1. Start the Project: `npm run dev`

Access the application in your browser at `http://localhost:3000`.

