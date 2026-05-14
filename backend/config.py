"""
Configuration and environment variables for the BETAPP backend.
TODO: Add database URL, API keys, and other sensitive config
"""
import os
from dotenv import load_dotenv

load_dotenv()

# Application settings
DEBUG = os.getenv("DEBUG", "True").lower() == "true"
APP_NAME = "BETAPP - Sports Betting Predictor"
VERSION = "0.1.0"

# API settings
API_PREFIX = "/api/v1"
CORS_ORIGINS = ["http://localhost:3000", "http://localhost:8000"]

# Database (TODO: implement)
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./betapp.db")

# API Keys (TODO: add external sports data APIs)
SPORTS_API_KEY = os.getenv("SPORTS_API_KEY", "")
ML_MODEL_PATH = os.getenv("ML_MODEL_PATH", "./models/predictor.pkl")

# Server settings
SERVER_HOST = "0.0.0.0"
SERVER_PORT = 8000
