# Pharma Automatization Toolkit

### Overview

The Pharma Automatization Toolkit is a collection of internal utilities designed to streamline routine tasks within the R&D workflow, including small build automations, file processing helpers, and lightweight CI/CD script components.

This repository aggregates several internal modules we use for:

- Pre-processing experiment data
- Workflow orchestration
- Automated task handling
- CI pipeline prototype testing
- Scripting helper functions for day-to-day engineering tasks

The project is currently under active development, and contributions are welcome as part of our upcoming workflow modernization effort.

### Installation

This toolkit uses Node.js for some automation components.

Requirements:

- Node.js 16+
- Git
- Basic internal permissions to run workflow tools

Clone the repository:

git clone 
cd pharma-automatization
npm install

### Usage
Run a basic pipeline test:
node automation/pipeline.js

Use helper utilities:
const { normalizePath, validateInput } = require('./automation/helpers');

### Configure environment

Update values in:

config/settings.json


Environment variables can be modified in .env (temporary, will be replaced after the next sprint).

### Contributing

We are currently revising several automation steps. If you are reviewing this repository for a potential engineering collaboration (contract or internal role), please:

1. Look through the pipeline logic
2. Suggest improvements to the helper functions
3. Review the internal utils (pharma-utils) for consistency
4. Comment on CI/CD or automation design choices
5. Flag any optimization opportunities

Feel free to open a PR or send a suggestions summary.
