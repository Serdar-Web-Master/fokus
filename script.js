const btn = document.querySelector('.btn');

const malysh__block = document.querySelector('.malysh__block');

const point = document.querySelector('.point');


let a = 0;



function counter(params) {
   a = a + 1
   point.classList.add("red");
   console.log(a);
}

// function malyshOp(params) {

//    if(a==1) {
//       malysh__block.classList.add("opacity");
//    setTimeout(()=>{
//       malysh__block.classList.remove("opacity");
//       a = 0 ;
//       console.log("a=" + a);
//    },5000)
//    }  
// }

function malyshOp(params) {

   if(a==1) {
      malysh__block.classList.toggle("opacity");
   setTimeout(()=>{
      point.classList.remove("red");
      a = 0 ;
      console.log("a=" + a);
   },5000)
   }  
}
malysh__block.addEventListener("click",malyshOp)

btn.addEventListener("click",counter);


// function f1 (){
//    console.log("f1");
   
//    malysh__block.classList.add("opacity");
//    setTimeout(()=>{
//       malysh__block.classList.remove("opacity");
//    },5000)
// }