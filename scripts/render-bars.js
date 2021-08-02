function renderBars(array) {
  let max = Math.max(...array);
  let width = 100/(array.length+1);
  let step = 100/max;
  let gap = width/(array.length+1);
  
  clearBars();
  
  array.forEach((number,index)=>{
    create(number,index,max,width,step,gap);
  });
  let hr = document.createElement('hr');
  hr.classList.add('pivot');
  
  document.querySelector('#bars-wrapper').appendChild(hr);
}

function create(number,index,max,width,step,gap) {
  let div = document.createElement('div');
  div.setAttribute('data-value',number);
  div.style.height = `${step*number}%`;
  div.style.left = `${index*(gap+width)+gap}%`;
  div.style.width = `${width}%`;
  div.classList.add('bars');
  
  document.querySelector('#bars-wrapper').appendChild(div);
}