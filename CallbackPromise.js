

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate fetching data asynchronously
    setTimeout(() => {
      const data = 'Hello, Promises!';
      resolve(data);
      // or reject(new Error('Failed to fetch data'));
    }, 1000);
  });
}
 
fetchData()
  .then(data => console.log(`Fetched data: ${data}`))
  .catch(error => console.error(`Error: ${error.message}`));
 
 
// Output: Fetched data: Hello, Promises!
