/**
 * Main automation pipeline orchestrator
 * -------------------------------------
 * This script handles workflow execution for internal automation tasks.
 * Modules under pharma-utils are used for normalization and helper steps.
 */

const { runTask, normalizePath } = require('./helpers');
const utils = require('../pharma-utils');

async function main() {
    console.log("[Pipeline] Starting workflow...");

    try {
        const input = "./data/input";
        const normalized = normalizePath(input);

        // Simulated task
        await runTask("preprocess-data", normalized);

        // Example utility usage
        const res = utils.calc(2, 3);
        console.log("[Pipeline] Utility calc result:", res);

        console.log("[Pipeline] Workflow completed.");
    } catch (err) {
        console.error("[Pipeline] Error:", err.message);
    }
}

main();