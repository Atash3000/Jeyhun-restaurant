// document.querySelector('.increase').onclick=()=>{


//  let value = parseInt(document.querySelector('.input-box').value, 10);
// value = isNaN(value) ? 0 : value;
// value++;
// document.querySelector('.input-box').value = value;
// }

// document.querySelector('.decrease').onclick=()=>{
//   let value = parseInt(document.querySelector('.input-box').value, 10);
//  value = isNaN(value) ? 0 : value;
//  value--;
//  if( document.querySelector('.input-box').value >1){
  //   document.querySelector('.input-box').value = value;
  //  }
  
  //  }
  


  // function increase(){

  // let value = parseInt(document.querySelector('.input-box').value, 10);
  // value = isNaN(value) ? 0 : value;
  // value++;
  // document.querySelector('.input-box').value = value;
  // }

  let btn = document.querySelectorAll('.increase') 
  let value = document.querySelectorAll('.input-box')
  let box = [];
  for( i in value){
box.push(value[i])
  }
console.log(box)

btn.forEach(item=>{
  item.addEventListener('click',()=>{
    let x = parseInt(box, 10);
    x = isNaN(value) ? 0 : value;
      x++;
  document.querySelector('.input-box').value = x;
    })
  })



  let ulList = document.querySelector('.main-menu')

  document.querySelector('.toogle-icon').onclick=()=>{
   
    
   
    ulList.classList.add('display-menu') 
    document.querySelector('.toogle-icon').addEventListener('click',()=>{
      ulList.classList.remove('display-menu') 
    })
   

  }

  // function removeClass(){
  //   ulList.classList.remove('display-menu') 
  // }