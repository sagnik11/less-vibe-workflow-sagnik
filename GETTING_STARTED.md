# Getting Started from the Terminal

A quick reference for starting all parts of the Vibe Workflow project from the terminal.

---

## Prerequisites

- **Node.js** v20+
- **npm** v7+ (for workspaces support)
- **Python** v3.10+
- **Docker** & **Docker Compose** (optional, for containerized setup)

---

## 1. Install Dependencies

From the project root:

```bash
npm install
```

This installs dependencies for the client, the workflow-builder library, and links them via npm workspaces.

---

## 2. Configure Environment

The backend requires a **MuAPI** key for AI capabilities.

```bash
cd server
cp .env.example .env
```

Edit `server/.env` and set:

```
MU_API_KEY=your_actual_api_key_here
```

---

## 3. Starting the Frontend (Next.js Client)

From the project root:

```bash
npm run dev:app
```

This runs the Next.js development server on **http://localhost:3000**.

For turbo mode (faster refresh):

```bash
cd client
npm run dev:turbo
```

To build and serve a production build:

```bash
npm run build:app
cd client
npm run start
```

---

## 4. Starting the Backend (FastAPI Server)

```bash
cd server
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Run the server:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at **http://localhost:8000**.

- API Docs (Swagger): http://localhost:8000/docs
- Health check: http://localhost:8000/api/health

---

## 5. Building the Workflow Builder Library

The `workflow-builder` package is a shared UI library used by the client. Rebuild it after making changes:

```bash
npm run build:lib
```

This compiles the source with Babel and builds the Tailwind CSS output into the `dist/` folder.

---

## 6. Running Everything with Docker Compose

To start both the frontend and backend together in containers:

```bash
# From the project root
cp .env.example .env
# Edit .env and add your MU_API_KEY

docker compose up --build
```

| Service  | Port |
|----------|------|
| Client   | 3000 |
| Server   | 8000 |

To stop all services:

```bash
docker compose down
```

---

## Quick Reference

| What                     | Command                                                    | URL                    |
|--------------------------|------------------------------------------------------------|------------------------|
| Install all deps         | `npm install`                                              | —                      |
| Frontend (dev)           | `npm run dev:app`                                          | http://localhost:3000   |
| Frontend (turbo dev)     | `cd client && npm run dev:turbo`                           | http://localhost:3000   |
| Frontend (production)    | `npm run build:app && cd client && npm run start`          | http://localhost:3000   |
| Backend (dev)            | `cd server && uvicorn app.main:app --reload --port 8000`   | http://localhost:8000   |
| Build shared library     | `npm run build:lib`                                        | —                      |
| Docker (all services)    | `docker compose up --build`                                | 3000, 8000             |
