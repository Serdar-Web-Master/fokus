const btn = document.querySelector('.btn');

const malysh__block = document.querySelector('.malysh__block');


btn.addEventListener('click',()=>{
   console.log("da");
   malysh__block.classList.add("op");
   setTimeout(()=>{
      malysh__block.classList.remove("op");
   },5000)
})
