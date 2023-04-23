

// get the button element
const button = document.getElementById('btn');

// set the initial level and timeout
let level = 1;
let timeout = 300;

// set the number of clicks to 0
let clicks = 0;

// add a mouseover event listener to the button
button.addEventListener('mouseover', () => {
  // set a delay of 200ms before changing the button's position
  setTimeout(() => {
    // generate a random number between 0 and 300
    const marginTop = Math.random() * 400;
    const marginLeft = Math.random() * 400;

    // set the button's margin-top and margin-left to the random numbers
    button.style.marginTop = `${marginTop}px`;
    button.style.marginLeft = `${marginLeft}px`;
  }, 200);
});

// add a click event listener to the button
button.addEventListener('click', () => {
  // increment the number of clicks
  clicks++;

  // if the user has clicked the button three times
  if (clicks === 3) {
    // alert the user that they won the level
    alert(`Congratulations! You won level ${level}`);
    


    // if it's level 6 or higher, set the timeout to 0
    if (level >= 6) {
      timeout = 0;
    } else {
      // increment the level and decrease the timeout by 100ms
      level++;
      timeout -= 200;
    }

    // reset the number of clicks to 0
    clicks = 0;

    // set the button's margin-top and margin-left to the center of the screen after the timeout
    setTimeout(() => {
        // generate a random number between 0 and 300
        const marginTop = Math.random() * 300;
        const marginLeft = Math.random() * 300;
    
        // set the button's margin-top and margin-left to the random numbers
        button.style.marginTop = `${marginTop}px`;
        button.style.marginLeft = `${marginLeft}px`;
      }, timeout);
  }
});