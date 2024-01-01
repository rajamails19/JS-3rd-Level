

// Callback Hell (Pyramid of Doom):

function stepOne(callback) {
  setTimeout(() => {
    console.log('Step One Completed');
    callback();
  }, 1000);
}

function stepTwo(callback) {
  setTimeout(() => {
    console.log('Step Two Completed');
    callback();
  }, 1000);
}

function stepThree() {
  setTimeout(() => {
    console.log('Step Three Completed');
  }, 1000);
}

stepOne(() => {
  stepTwo(() => {
    stepThree();
  });
});


/*
Output:

Step One Completed
Step Two Completed
Step Three Completed
*/

