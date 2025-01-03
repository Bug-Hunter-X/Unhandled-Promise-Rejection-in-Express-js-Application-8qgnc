# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications: unhandled promise rejections.  The bug showcases an asynchronous database operation that lacks proper error handling, leading to silent failures and making debugging challenging. The solution demonstrates how to implement robust error handling using `try...catch` blocks or `.catch()` method of promises.

## Bug

The `bug.js` file contains an Express.js route that attempts to create a user in a database. However, it lacks error handling for potential failures during the database operation. If the database operation fails (e.g., due to a network error or database constraint violation), the promise rejection will go unhandled, causing the server to behave unpredictably, potentially leading to crashes or data inconsistencies.

## Solution

The `bugSolution.js` file shows how to address this issue by adding proper error handling. The solution uses a `try...catch` block to gracefully handle any exceptions during the database operation.  This prevents unhandled promise rejections and allows for more robust error reporting and recovery mechanisms.  Alternative approaches using promise `.catch()` are also explained in the comments within `bugSolution.js`.