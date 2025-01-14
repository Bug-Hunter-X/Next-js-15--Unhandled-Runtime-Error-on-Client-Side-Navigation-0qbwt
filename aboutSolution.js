```javascript
// pages/aboutSolution.js

export default function About() {
  // Solution using optional chaining
  const nonExistentVariable = undefined;
  return (
    <h1>About Page: {nonExistentVariable?.toString()}</h1>
  );
}
```