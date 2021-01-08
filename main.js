let n = prompt("How many floors you want for Your Super Pyramid ?");

if ( n <= 25){
    console.log('Hello <3 , here is your Super Pyramid !');
    SuperPyramid(n);
    console.log('Made with <3');
}
else {
    console.log('Sorry  dude ,  i can not draw your Supper Pyramid :/ :/ :/ :/ :/');
}

function SuperPyramid(n) { // If we took an example  n=3 
    
    const columnLength = (n * 2) - 1; // 5 
    // The following formula would yield the result we need: 
    // (n * 2) - 1 => row=2;col=3; row=3;col=5; row=5;col=9 ...
    
    let middlePoint = Math.floor(columnLength / 2) // So the middlePoint would be 2
    for(let row=0; row<n; row++) { // let's  now create the rows 
      let result = ''; // init our output inside of the 1st for loop
      for(let col=0; col<columnLength; col++) { // creating the columns 
  
  // We got 2 sides, right? 
  // So, before we insert '#' we need to make sure the following logic is met:
  // Look at:  (middle - row) as being the left side and  (middle + row) as the right one.
  // Only if both conditions are met, we want to insert the "#" sign
        if(middlePoint - row <= col && middlePoint+ row >= col ) {
           result += '#';
        } else {
  // If '#' is NOT inserted then we want to insert the empty string ' '
          result += ' ';
        }
      }
      console.log(result);
    }
  }
