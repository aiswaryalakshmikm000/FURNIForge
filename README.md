# FurniForge

FurniForge is a full-stack furniture design and management platform that connects clients and designers to create and manage custom furniture projects.

The platform allows users to request custom furniture such as wardrobes, sofas, office desks etc as per the admin added deliverables, while enabling administrators and designers to manage projects efficiently.

---

## Tech Stack

### Backend

* Node.js + TypeScript
* PostgreSQL
* Prisma ORM
* Redis (Caching, OTP, Rate Limiting)
* AWS S3 (File Storage)
* Docker
* Clean Architecture

### Security

* Helmet
* CORS
* Rate Limiting (Redis)
* Zod Validation
* JWT Authentication (Access Token + Refresh Token)

### Frontend

* React + TypeScript
* React Query (Server State Management)
* Redux Toolkit (Authentication and Global State)
* React Hook Form + Zod (Form Validation)

### DevOps

* Docker
* GitHub Actions CI/CD
* Environment Configuration

### AI

* OpenAI Image Generation API

---

## Deliverables

The platform supports expandable custom design and management for the following furniture. Admin can add any deliverables and templates with the desired fields:

* Wardrobe
* TV Unit
* Sofa
* Office Desk
* Bed

---

## Features

* Secure authentication system
* Role-based access (Admin, Client, Designer)
* Furniture design request system
* Image upload and storage using AWS S3
* AI generated furniture design images
* Scalable backend architecture
* CI/CD deployment pipeline

---

## Installation

Clone the repository

git clone https://github.com/aiswaryalakshmikm000/furniforge.git

Go to the project folder

cd furniforge

Install dependencies

npm install

Run development server

npm run dev

---

## Environment Variables

Create a .env file using .env.example

---

## Docker

Run the project using Docker

docker-compose up --build

---

## License

MIT License
