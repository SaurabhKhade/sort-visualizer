export default async function Selection(numbers,speed) {
  let bars = getBars();
  
  for(let i=0; i<numbers.length; i++) {
    let min = i;
    setColor(bars,i);
    for(let j=i+1; j<numbers.length; j++) {
      setColor(bars,j);
      await wait(speed);
      
      if (error) {
        return new Error('Stopped');
      }
      
      if (numbers[j]<numbers[min]) {
        removeColor(bars,min)
        min = j;
      } else {
        removeColor(bars,j);
      }
    }
    
    let temp = numbers[i];
    numbers[i] = numbers[min];
    numbers[min] = temp;
    beep();
    swapBars(bars,i,min);
    bars[i].style.backgroundColor = 'green';
    await wait(speed);
    if (error) {
      return new Error('Stopped');
    }
  }
  finish();
  await wait(2000);
  resetAll(bars);
}