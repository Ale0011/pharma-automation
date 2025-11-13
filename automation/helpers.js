/**
 * Helper utilities for pipeline operations
 * ----------------------------------------
 * These functions support common tasks in workflow scripts.
 */

const path = require('path');

function normalizePath(p) {
    return path.resolve(p).replace(/\\/g, "/");
}

async function runTask(taskName, inputPath) {
    console.log(`[Pipeline] Running task '${taskName}' on ${inputPath}`);

    // Simulated async operation
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 400);
    });
}

module.exports = { runTask, normalizePath };