# BETAPP - AI Sports Betting Predictor

An intelligent sports betting prediction application powered by AI, featuring a React frontend and FastAPI backend.

## Project Structure

```
BETAPP/
├── backend/              # Python FastAPI backend
│   ├── main.py          # FastAPI application entry point
│   ├── config.py        # Configuration and environment variables
│   ├── api/             # API route handlers
│   └── models/          # ML model stubs and integration
├── frontend/            # React TypeScript frontend
│   ├── src/
│   │   ├── App.jsx      # Main application component
│   │   ├── components/  # Reusable UI components
│   │   └── api.js       # API client
│   └── public/          # Static assets
└── docs/                # Documentation and setup guides
```

## Quick Start

### Backend Setup
```bash
cd BETAPP
pip install -r requirements.txt
cd backend
uvicorn main:app --reload
```

Backend will run on `http://localhost:8000`

### Frontend Setup
```bash
cd BETAPP/frontend
npm install
npm start
```

Frontend will run on `http://localhost:3000`

## API Documentation
Once backend is running, visit `http://localhost:8000/docs` for interactive API documentation (Swagger UI).

## Features (In Development)
- [ ] Sports event prediction engine
- [ ] Odds calculation and display
- [ ] Bet placement and management
- [ ] User authentication
- [ ] Prediction accuracy tracking
- [ ] ML model integration

## Tech Stack
- **Backend**: Python, FastAPI, Uvicorn
- **Frontend**: React, Axios
- **Database**: (To be added)
- **ML**: (To be configured)

## Next Steps
1. Set up backend and frontend with `npm install` and `pip install`
2. Run both servers locally
3. Integrate real ML models and sports data APIs
4. Add database layer for persistence
5. Deploy to production

## Contributing
This is an active development project. See `docs/setup.md` for detailed setup instructions.
