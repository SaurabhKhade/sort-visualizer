function random(size) {
  let arr = [];
  for(let i=0; i<size; i++) {
    arr.push(Math.ceil(Math.random()*99));
  }
  return arr;
}

function getBars() {
  let list = document.querySelectorAll('.bars');
  let arr = [];
  list.forEach(tag=>arr.push(tag))
  return arr;
}

function setColor(bars,...rest) {
  rest.forEach(index=>{
    if (bars[index]) {
      bars[index].style.backgroundColor = 'red';
    }
  })
}

function removeColor(bars,...rest) {
  rest.forEach(index=>{
    if (bars[index]) {
      bars[index].style.backgroundColor = 'hsl(0,0%,70%)'; 
    }
  })
}

function setAll(bars) {
  bars.forEach(tag=>{
    tag.style.backgroundColor = 'green';
  })
}

function resetAll(bars) {
  bars.forEach(tag=>{
    tag.style.backgroundColor = 'hsl(0,0%,70%)';
  })
}

function wait(time) {
  return new Promise(res=>{
    setTimeout(()=>res(),time);
  });
}

function swapBars(bars,i,j) {
  let el1 = bars[i];
  let el2 = bars[j];
  let style1 = el1.style.left;
  el1.style.left = el2.style.left;
  el2.style.left = style1;
  bars[i] = el2;
  bars[j] = el1;
}

function setBtnText(text) {
  document.querySelector('#start').innerText = text;
}

function clearBars() {
  document.querySelector('#bars-wrapper').innerHTML = '';
}

function beep() {
  document.querySelector("#beep").play();
}

function finish() {
  document.querySelector("#finish").play();
}

function setBlur(bars,i,j) {
  for(let k=i; k<=j; k++) {
    bars[k].style.opacity=".3";
  }
}

function resetBlur(bars,i,j) {
  for(let k=i; k<=j; k++) {
    bars[k].style.opacity="1";
  }
}

function exceptBlur(bars,i,j) {
  bars.forEach(tag=>{
    tag.style.opacity=".3";
  })
  for(let k=i; k<=j; k++) {
    bars[k].style.opacity="1";
  }
}

function setPivot(bar) {
  document.querySelector('.pivot').style.display="block";
  let height = parseFloat(bar.style.height);
  height-=2;
  document.querySelector('.pivot').style.top=`${height}%`;
}

function resetPivot() {
  document.querySelector('.pivot').style.display="none";
}

function setBGC(bar,color="orange") {
  if (bar) {
    bar.style.backgroundColor = color;
  }
}