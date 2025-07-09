#!/bin/bash

# Set environment variables for Node.js
export NODE_OPTIONS="--experimental-specifier-resolution=node"

# Use npx to run Vite directly
npx vite build 