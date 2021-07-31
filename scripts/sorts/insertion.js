export default async function Insertion(numbers,speed) {
  let bars = getBars();
  
  for(let i=1; i<numbers.length; i++) {
    for(let j=i; j>0; j--) {
      setColor(bars,j);
      await wait(speed);
      if (error) {
        return new Error('Stopped');
      }
      if(numbers[j-1]>numbers[j]) {
        let temp = numbers[j];
        numbers[j] = numbers[j-1];
        numbers[j-1] = temp;
        beep();
        swapBars(bars,j,j-1);
      } else {
        removeColor(bars,j-1,j);
        break;
      }
      removeColor(bars,j-1,j);
    }
    await wait(speed);
    if (error) {
      return new Error('Stopped');
    }
  }
  setAll(bars);
  finish();
  await wait(2000);
  resetAll(bars);
}