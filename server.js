const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Dummy data for carbon emissions
let carbonEmissionsData = {
  totalEmissions: 10000, // in tons
  reductionSuggestion: 'Increase renewable energy use by 20%',
};

// API endpoint to fetch carbon emissions data
app.get('/api/carbon-emissions', (req, res) => {
  res.json(carbonEmissionsData);
});

app.listen(port, () => {
  console.log(`Carbonix AI backend listening at http://localhost:${port}`);
});
