let size = 10;
let numbers = random(size);
renderBars(numbers);
let speed = 600;
let sortCondition = 0;
let algo = 'selection';
let error = false;

document.querySelector('#stop').addEventListener('click',async ()=>{
  error = true;
  await wait(speed+10)
  clearBars();
  renderBars(numbers);
  sortCondition = 0;
  setBtnText("Sort");
  error = false;
});

document.querySelector('#start').addEventListener('click',async () => {
  let {default:sortAlgo} = await import(`./sorts/${algo}.js`);
  if (sortCondition===2) {
    sortCondition = 0;
    setBtnText("Sort");
    numbers = random(size);
    renderBars(numbers);
  } else if (sortCondition===1) {
    return;
  } else if (sortCondition===0) {
    sortCondition = 1;
    setBtnText("Sorting...");
    await sortAlgo(numbers,speed);
    sortCondition = 2;
    setBtnText("Reset");
  }
});

document.querySelector("#set-value").addEventListener('click',()=>{
  if(sortCondition===1) {
    alert("Please stop sorting first!");
    return false;
  }
  let arr_size = parseInt(document.querySelector("#arr_size").value);
  let anm_speed = parseInt(document.querySelector("#speed").value);
  
  if(arr_size===0||anm_speed===0) {
    alert('Please Enter valid values!');
    return false;
  }
  if(arr_size) {
    size = arr_size;
    numbers = random(size);
    renderBars(numbers);
  }
  
  if(anm_speed)
    speed = anm_speed;
})