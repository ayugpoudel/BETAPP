# BETAPP Setup Guide

Complete setup instructions for developing and deploying the BETAPP AI Sports Betting Predictor.

## Prerequisites

- Python 3.8+
- Node.js 16+
- Git
- Virtual environment manager (venv or conda)

## Backend Setup

### 1. Create Python Virtual Environment

```bash
cd BETAPP
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure Environment Variables

```bash
cd backend
cp .env.example .env
# Edit .env with your settings
```

### 4. Run Development Server

```bash
cd BETAPP
uvicorn backend.main:app --reload
```

The API will be available at `http://localhost:8000`

**API Documentation:** `http://localhost:8000/docs` (Swagger UI)

## Frontend Setup

### 1. Install Dependencies

```bash
cd BETAPP/frontend
npm install
```

### 2. Configure Environment (Optional)

```bash
# Create .env file if needed
echo "REACT_APP_API_URL=http://localhost:8000" > .env
```

### 3. Run Development Server

```bash
npm start
```

The frontend will open at `http://localhost:3000`

## Running Both Servers

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd BETAPP
source venv/bin/activate
uvicorn backend.main:app --reload
```

**Terminal 2 - Frontend:**
```bash
cd BETAPP/frontend
npm start
```

## Project Structure Overview

```
BETAPP/
├── backend/
│   ├── main.py                 # FastAPI entry point
│   ├── config.py               # Configuration
│   ├── api/                    # Route handlers (TODO)
│   ├── models/                 # ML models (TODO)
│   ├── requirements.txt         # Python dependencies
│   └── .env.example            # Environment template
├── frontend/
│   ├── src/
│   │   ├── App.jsx             # Main component
│   │   ├── App.css             # Styling
│   │   ├── api.js              # API client
│   │   └── components/         # Reusable components (TODO)
│   ├── public/
│   │   └── index.html          # HTML template
│   └── package.json            # Dependencies
└── docs/
    └── setup.md                # This file
```

## Development Tasks (TODO)

### Backend
- [ ] Implement sports data API integration
- [ ] Build ML prediction model
- [ ] Add database layer (PostgreSQL/MongoDB)
- [ ] Implement user authentication (JWT)
- [ ] Create bet management endpoints
- [ ] Add WebSocket support for real-time updates
- [ ] Add test suite
- [ ] Add API rate limiting

### Frontend
- [ ] Build additional UI components
- [ ] Implement React Router for navigation
- [ ] Add user authentication pages
- [ ] Build betting dashboard
- [ ] Add portfolio tracking
- [ ] Implement real-time updates (WebSockets)
- [ ] Add responsive mobile design
- [ ] Add unit and integration tests

### DevOps
- [ ] Docker setup for containerization
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Database schema and migrations
- [ ] Production deployment configuration

## Testing

### Backend Tests
```bash
cd BETAPP
pytest backend/tests/
```

### Frontend Tests
```bash
cd BETAPP/frontend
npm test
```

## Building for Production

### Frontend Build
```bash
cd BETAPP/frontend
npm run build
```

Output will be in `frontend/build/`

### Backend Deployment
```bash
cd BETAPP
gunicorn backend.main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker
```

## Debugging

### Backend Debugging
- FastAPI docs: `http://localhost:8000/docs`
- Check logs in terminal
- Add breakpoints and use `pdb` for Python debugging

### Frontend Debugging
- React DevTools browser extension
- Check browser console for errors
- Use `console.log()` for debugging

## Common Issues

**Backend won't start:**
- Ensure Python venv is activated
- Check `requirements.txt` dependencies are installed
- Verify port 8000 is not in use

**Frontend won't start:**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version`

**CORS errors:**
- Ensure backend is running on correct URL
- Check `config.py` `CORS_ORIGINS` includes frontend URL

## Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Axios Documentation](https://axios-http.com/)
- [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html)

## Next Steps

1. Get both servers running locally
2. Test API endpoints via Swagger UI
3. Verify frontend can connect to backend
4. Start implementing core features
5. Set up database and authentication
6. Deploy to staging environment

---

**Status:** In active development | **Version:** 0.1.0
