#!/bin/bash
cd /tmp/kavia/workspace/code-generation/foodie-find-and-order-666213-666222/food_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

