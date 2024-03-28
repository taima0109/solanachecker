export const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
Optimize build - refactoring code