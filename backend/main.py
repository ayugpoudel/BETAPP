"""
BETAPP Backend - FastAPI Application Entry Point

Main FastAPI application for the AI Sports Betting Predictor.
TODO: Add authentication, database models, websockets for real-time updates
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import config

app = FastAPI(
    title=config.APP_NAME,
    version=config.VERSION,
    description="AI-powered sports betting prediction API"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=config.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    """Welcome endpoint"""
    return {
        "message": "Welcome to BETAPP - AI Sports Betting Predictor",
        "version": config.VERSION,
        "docs_url": "/docs"
    }


@app.get("/health")
async def health():
    """Health check endpoint"""
    return {"status": "healthy"}


# TODO: Add these endpoints
# @app.get("/api/v1/sports")
# async def get_sports():
#     """Get available sports"""
#     pass

# @app.get("/api/v1/events")
# async def get_events():
#     """Get upcoming sporting events"""
#     pass

# @app.post("/api/v1/predict")
# async def predict_outcome(event_id: str):
#     """Get AI prediction for a specific event"""
#     pass

# @app.post("/api/v1/bet")
# async def place_bet(bet_data: dict):
#     """Place a bet"""
#     pass

# @app.get("/api/v1/bets")
# async def get_user_bets():
#     """Get user's betting history"""
#     pass


@app.exception_handler(Exception)
async def global_exception_handler(request, exc):
    """Global exception handler"""
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"}
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host=config.SERVER_HOST,
        port=config.SERVER_PORT,
        reload=config.DEBUG
    )
