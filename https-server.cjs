const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// For local development only - DO NOT use in production
const options = {
  key: `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgENq9xZdcuX3dYdc+
vXcYJ+7W5J4c71eBaZsRZiY3lK+hRANCAASZnW4r9pJx8dZzEiPV2XyXC10o1g5p
9Qg5dZv2q+q5x9Y9X9Y9X9Y9X9Y9X9Y9X9Y9X9Y9X9Y9X9Y9X9Y9
-----END PRIVATE KEY-----`,
  cert: `-----BEGIN CERTIFICATE-----
MIIBmjCCAUCgAwIBAgIJAIFQGa7JgfFkMAoGCCqGSM49BAMCMBoxCzAJBgNVBAYT
AlhYMQ8wDQYDVQQIDAZVdGFob2gxETAPBgNVBAoMCFRlc3QgTHRkMB4XDTI0MTEy
NDEwMDAwMFoXDTI1MTEyNDEwMDAwMFowGjELMAkGA1UEBhMCWFgxDzANBgNVBAgM
BlV0YWhvbjBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJmdbiv2knHx1nMSI9XZ
fJcLXSjWDmn1CDl1m/ar6rnH1j1f1j1f1j1f1j1f1j1f1j1f1j1f1j1f1j1f1j0w
CgYIKoZIzj0EAwIDSAAwRQIgOZ8c+/dK0r95+Q35z5z5z5z5z5z5z5z5z5z5z5z5
z5ACIQDm3v3v3v3v3v3v3v3v3v3v3v3v3v3v3v3v3v3v3v3v3v3v
-----END CERTIFICATE-----`
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS Server is running on port ${PORT}`);
  console.log(`Access the app at: https://localhost:${PORT}`);
  console.log(`WARNING: This uses a self-signed certificate for local development only`);
});