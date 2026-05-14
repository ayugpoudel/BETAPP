# 🚀 BETAPP Quick Start Guide

Your **BETAPP AI Sports Betting Predictor** project is fully created and ready to go!

## ✅ What's Done

- ✓ Complete project structure created
- ✓ FastAPI backend with sample endpoints and ML stubs
- ✓ React frontend with betting UI and API integration
- ✓ Full documentation and setup guide
- ✓ Git repository initialized with clean commits
- ✓ Ready to push to GitHub

## 📍 Project Location

```
/Users/ayugpoudel/BETAPP/
```

## 🔗 Next: Connect to GitHub

### Option 1: Using HTTPS (Easier)
1. Go to https://github.com/new
2. Create empty repository named `BETAPP`
3. Run this command:
```bash
cd /Users/ayugpoudel/BETAPP
bash GITHUB_SETUP.sh
```

### Option 2: Manual Steps
1. Create empty repo at https://github.com/new (name: `BETAPP`)
2. Run:
```bash
cd /Users/ayugpoudel/BETAPP
git remote add origin https://github.com/ayugpoudel/BETAPP.git
git branch -M main
git push -u origin main
```

## 💻 Run Locally (After GitHub Setup)

### Terminal 1: Backend
```bash
cd /Users/ayugpoudel/BETAPP
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn backend.main:app --reload
```
→ Open http://localhost:8000/docs for API documentation

### Terminal 2: Frontend
```bash
cd /Users/ayugpoudel/BETAPP/frontend
npm install
npm start
```
→ Opens http://localhost:3000

## 📁 Project Structure

```
BETAPP/
├── README.md                 # Project overview
├── requirements.txt          # Python dependencies
├── GITHUB_SETUP.sh          # GitHub connection script
│
├── backend/
│   ├── main.py              # FastAPI app entry point
│   ├── config.py            # Configuration
│   ├── .env.example         # Environment template
│   ├── api/                 # Route handlers (TODO)
│   └── models/
│       └── predictor.py     # ML predictor stub
│
├── frontend/
│   ├── package.json         # React dependencies
│   ├── public/
│   │   └── index.html       # HTML entry point
│   └── src/
│       ├── App.jsx          # Main component with UI
│       ├── App.css          # Styling
│       ├── api.js           # API client
│       └── index.js         # React root
│
└── docs/
    └── setup.md             # Detailed setup guide
```

## 🎯 Development Workflow

1. **Create repo on GitHub** (empty, no files)
2. **Push to GitHub** (using script or manual steps above)
3. **Make changes locally**:
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```
4. **Iterate with AI** - Use TODO comments as guides for AI-assisted development

## 📝 TODO Comments Throughout Code

Look for `# TODO:` and `// TODO:` comments in:
- `backend/main.py` - API endpoints to implement
- `backend/config.py` - Configuration to add
- `backend/models/predictor.py` - ML model integration
- `frontend/src/App.jsx` - UI features to build
- `frontend/src/api.js` - API methods to connect

These are entry points for AI-assisted coding!

## 🔧 Troubleshooting

**Backend won't start?**
- Ensure venv is activated
- Run `pip install -r requirements.txt`
- Check port 8000 isn't in use

**Frontend won't start?**
- Clear cache: `rm -rf frontend/node_modules && npm install`
- Run from `frontend/` directory

**GitHub push fails?**
- Repo must exist at https://github.com/ayugpoudel/BETAPP
- No README, .gitignore, or license in GitHub repo
- GitHub authentication configured

## 📚 Resources

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [React Docs](https://react.dev/)
- [Setup Guide](docs/setup.md) - Detailed instructions
- [Main README](README.md) - Project overview

---

**Status**: Ready for development | **Version**: 0.1.0 | **Last Updated**: May 14, 2026

Happy coding! 🎲
