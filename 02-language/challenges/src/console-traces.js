const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async  triggers => {
  
  // Explanation: We can't use triggers.forEach here because we need to wait for each trigger
  // to complete before moving to the next one.
  // Using a for...of loop allows us to await each trigger sequentially.
  // If we used triggers.forEach, it would not wait for the promises to resolve,
  // leading to all messages being logged at once without the intended delays.

  for(const trigger of triggers) {
     await trigger();
  }
  
  console.log("first");
};

run(triggers);