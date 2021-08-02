export default async function quick(numbers,speed) {
  
  let bars = getBars();
  
  await sort(0,numbers.length-1,numbers,bars,speed);
  resetBlur(bars,0,numbers.length-1);
  setAll(bars);
  finish();
  await wait(2000);
  resetAll(bars);
}

async function sort(low,high,numbers,bars,speed) {
  if (low<high) {
    let pivot = await partition(low,high,numbers,bars,speed);
    await wait(speed);
    exceptBlur(bars,low,pivot-1);
    await wait(speed);
    await sort(low,pivot-1,numbers,bars,speed);
    await wait(speed);
    exceptBlur(bars,pivot+1,high);
    await wait(speed);
    await sort(pivot+1,high,numbers,bars,speed);
    resetBlur(bars,0,numbers.length-1);
  }
}

async function partition(low,high,numbers,bars,speed) {
  let pivot = numbers[high];
  setPivot(bars[high]);
  setBGC(bars[high],'yellow');
  let min = low-1;
  for(let i=low; i<high; i++) {
    setColor(bars,i);
    setBGC(bars[min]);
    await wait(speed);
    if (numbers[i] < pivot) {
      let prevMin = min;
      removeColor(bars,min);
      min++;
      setBGC(bars[min]);
      setBGC(bars[min]);
      await wait(speed);
      let temp = numbers[i];
      numbers[i] = numbers[min];
      numbers[min] = temp;
      beep();
      swapBars(bars,i,min);
    }
    removeColor(bars,i);
  }
  await wait(speed);
  removeColor(bars,min);
  min++;
  setBGC(bars[min],'yellow');
  numbers[high] = numbers[min];
  numbers[min] = pivot;
  beep();
  swapBars(bars,high,min);
  await wait(speed);
  removeColor(bars,min,high);
  resetPivot();
  return min;
}