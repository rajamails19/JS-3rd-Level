

function readFile(filePath, callback) {
  console.log(`Reading file from ${filePath}...`);

  // Simulate reading the file by adding a delay
  setTimeout(() => {
    const fileContent = 'File content goes here!';
    console.log('File read complete.');
    callback(fileContent); // Invoke the callback with the file content
  }, 1500);
}

// Callback function to process the file content
function processFileContent(content) {
  console.log(`File content: ${content}`);
}

// Using the readFile function with a callback
readFile('/path/to/file.txt', processFileContent);

/*

"Reading file from /path/to/file.txt..."
"File read complete."
"File content: File content goes here!"

*/

