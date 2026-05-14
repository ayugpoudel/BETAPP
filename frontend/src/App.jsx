/**
 * Main BETAPP Application Component
 * 
 * TODO:
 * - Add React Router for navigation
 * - Add authentication flow
 * - Add real-time updates with WebSockets
 * - Add state management (Redux/Context API)
 * - Add responsive design and mobile support
 */

import React, { useState, useEffect } from 'react';
import { apiClient } from './api';
import './App.css';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check backend connection on mount
  useEffect(() => {
    const checkHealth = async () => {
      try {
        await apiClient.getHealth();
        setIsConnected(true);
        console.log('✓ Connected to backend');
      } catch (error) {
        setIsConnected(false);
        console.error('✗ Backend not available:', error.message);
      }
    };
    checkHealth();
  }, []);

  // TODO: Load events from backend
  const handleLoadEvents = async () => {
    setLoading(true);
    try {
      // const response = await apiClient.getEvents();
      // setEvents(response.data);
      // Mock data for now
      setEvents([
        {
          id: 1,
          sport: 'Football',
          team_a: 'Team A',
          team_b: 'Team B',
          date: '2024-05-15T19:00:00',
        },
        {
          id: 2,
          sport: 'Basketball',
          team_a: 'Lakers',
          team_b: 'Celtics',
          date: '2024-05-16T20:00:00',
        },
      ]);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  };

  // TODO: Implement prediction fetching
  const handleGetPrediction = async (eventId) => {
    setLoading(true);
    try {
      // const response = await apiClient.getPrediction(eventId);
      // setPrediction(response.data);
      // Mock prediction for now
      setPrediction({
        event_id: eventId,
        prediction: 'Team A',
        confidence: 0.72,
        odds: 1.95,
      });
    } catch (error) {
      console.error('Error getting prediction:', error);
    } finally {
      setLoading(false);
    }
  };

  // TODO: Implement bet placement
  const handlePlaceBet = async () => {
    if (!selectedEvent || !prediction) return;
    try {
      // await apiClient.placeBet({
      //   event_id: selectedEvent.id,
      //   prediction: prediction.prediction,
      //   amount: 100,
      // });
      alert('Bet placed successfully! (mock)');
    } catch (error) {
      console.error('Error placing bet:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎲 BETAPP - AI Sports Betting Predictor</h1>
        <div className="status">
          {isConnected ? (
            <span className="status-online">● Connected to Backend</span>
          ) : (
            <span className="status-offline">● Backend Offline</span>
          )}
        </div>
      </header>

      <main className="App-main">
        <section className="events-section">
          <h2>Upcoming Events</h2>
          <button onClick={handleLoadEvents} disabled={loading || !isConnected}>
            {loading ? 'Loading...' : 'Load Events'}
          </button>

          {events.length > 0 && (
            <div className="events-grid">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`event-card ${selectedEvent?.id === event.id ? 'selected' : ''}`}
                  onClick={() => {
                    setSelectedEvent(event);
                    handleGetPrediction(event.id);
                  }}
                >
                  <h3>{event.sport}</h3>
                  <p className="teams">
                    {event.team_a} <strong>vs</strong> {event.team_b}
                  </p>
                  <p className="date">{new Date(event.date).toLocaleString()}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {selectedEvent && prediction && (
          <section className="prediction-section">
            <h2>AI Prediction</h2>
            <div className="prediction-card">
              <h3>{selectedEvent.team_a} vs {selectedEvent.team_b}</h3>
              <div className="prediction-details">
                <p>
                  <strong>Predicted Winner:</strong> {prediction.prediction}
                </p>
                <p>
                  <strong>Confidence:</strong> {(prediction.confidence * 100).toFixed(1)}%
                </p>
                <p>
                  <strong>Odds:</strong> {prediction.odds}
                </p>
              </div>

              {isConnected && (
                <div className="bet-section">
                  <button
                    onClick={handlePlaceBet}
                    className="bet-button"
                    disabled={loading}
                  >
                    Place Bet - $100
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {!isConnected && (
          <div className="warning">
            <p>
              ⚠️ Backend is not available. Make sure the FastAPI server is running on
              localhost:8000
            </p>
          </div>
        )}
      </main>

      <footer className="App-footer">
        <p>BETAPP v0.1.0 - AI Sports Betting Predictor</p>
        <p>
          <a href="http://localhost:8000/docs" target="_blank" rel="noopener noreferrer">
            API Docs
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
