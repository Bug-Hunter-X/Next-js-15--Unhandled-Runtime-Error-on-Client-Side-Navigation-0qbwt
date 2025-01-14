# Next.js 15 Unhandled Runtime Error

This repository demonstrates a subtle runtime error that can occur in Next.js 15 applications during client-side navigation. The error arises when a page component accesses an undefined variable, and the error isn't gracefully handled, resulting in a crash.

## Description

The `about.js` file attempts to access `nonExistentVariable`, which is undefined.  In a typical Next.js application, this might lead to a runtime error on the client side. Next.js's error boundary is not sufficient to catch this error unless explicitly handled using try-catch or optional chaining.

## Solution

The `aboutSolution.js` file demonstrates a solution using optional chaining. It safely handles the potential absence of the variable, preventing the error.