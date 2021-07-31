export default async function bubble(numbers,speed) {
  
  let bars = getBars();
  
  for(let i=numbers.length-1; i>=0; i--) {
    for(let j=0; j<i; j++) {
      setColor(bars,j,j+1);
      await wait(speed);
      if (error) {
        return new Error('Stopped');
      }
      if (numbers[j]>numbers[j+1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = temp;
        
        beep();
        swapBars(bars,j,j+1);
        
        await wait(speed);
        if (error) {
          return new Error('Stopped');
        }
      }
      
      removeColor(bars,j,j+1);
    }
    
    bars[i].style.backgroundColor = 'green';
  }
  finish();
  await wait(2000);
  resetAll(bars);
}