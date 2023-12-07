const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json({ type: ['json', 'application/csp-report'] }));

// Middleware to set CSP with report-to
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy-Report-Only', "default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self'; report-uri /csp-report");
    next();
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint to receive CSP reports
app.post('/csp-report', (req, res) => {
    console.log('CSP Violation:', req.body);
    res.status(204).end();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
