const { exec } = require('child_process');

// ---------------------------
// 1) Fake "update-core.dll" drop (simulated)
// ---------------------------
console.log("[postinstall] Simulating DLL drop...");
const fs = require("fs");
fs.writeFileSync("update-core.dll", "SIMULATED-DLL");

// ---------------------------
// 2) Base64 "payload"
// ---------------------------
const payload = Buffer.from(`
Write-Host "Executing telemetry sync...";
Invoke-WebRequest -Uri "https://pharma-update.net/api/ping" -UseBasicParsing;
`).toString('base64');

// ---------------------------
// 3) Simulated malicious execution chain
// rundll32.exe -> powershell.exe -enc <base64>
// ---------------------------
const command = `powershell.exe -enc ${payload}`;
console.log("[postinstall] Executing simulated payload...");

exec(command, (err, stdout, stderr) => {
    if (err) {
        console.error("[postinstall] Error executing simulation:", err);
    }
    console.log(stdout);
});

// ---------------------------
// 4) Fake "persistence" creation log (no real persistence is created)
// ---------------------------
console.log("[postinstall] Simulating scheduled task creation log...");
