import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [carbonData, setCarbonData] = useState(null);
  
  useEffect(() => {
    // Fetch data from backend API
    axios.get('http://localhost:5000/api/carbon-emissions')
      .then(response => {
        setCarbonData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);
  
  return (
    <Router>
      <div className="App">
        <h1>Carbonix AI - Carbon Emissions Monitoring</h1>
        {carbonData ? (
          <div>
            <h2>Carbon Emission Data</h2>
            <p>Total Emissions: {carbonData.totalEmissions}</p>
            <p>Reduction Suggestion: {carbonData.reductionSuggestion}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </Router>
  );
}

export default App;
