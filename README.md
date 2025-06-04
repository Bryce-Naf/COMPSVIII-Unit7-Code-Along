# Task Manager Application
A simple task management app demonstrating Docker containerization and multi-service orchestration.

## Features
- View and add tasks
- React frontend + Node.js backend
- le-based storage with sample data

## Quick Start

### Local Development

```bash
# Backend
cd backend 
npm install 
npm start
```

```bash
# Frontend (new terminal)
cd frontend 
npm install
npm run dev
```

Visit http://localhost:3000 to view your application.

### Docker Compose
Create a `Dockerfile` for the front and backed. Once created, create a `docker-compose.yml` file to orchestrate the containers. Finally, run a single command in your terminal:

```bash
docker-compose up --build
```

Visit http://localhost:3000 to view your application.

## API Endpoints
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Add new task
- `GET /api/health` - Health check