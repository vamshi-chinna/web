const form = document.getElementById("form")
let result = document.getElementById("text")
const container = document.getElementById("container")

const containerItem = document.createElement("div");
const task = document.createElement("div");
const check = document.createElement("input")
const rmBtn = document.createElement("button")

async function addElementFunction() {
   
    check.type = "checkbox"
    check.setAttribute("class", "check")
    task.setAttribute("class", "task")
    rmBtn.setAttribute("class", "rmbtn")
    containerItem.setAttribute("class", "container-item")
 
    containerItem.style.textTransform = "capitalize"
    rmBtn.innerHTML = "X"
    task.innerHTML = result.value;
  
    containerItem.append(check)
    containerItem.append(task);
    containerItem.append(rmBtn)
    container.append(containerItem)


    result.value = " "
    function checkbox(){
       
        if(check.checked){
            task.style.textDecoration="line-through"
            console.log("done")
            
        }
        else{
            task.style.textDecoration="none"
            
        }
      
    }
    check.addEventListener("click",(e)=>{
        e.preventDefault
        checkbox();
        
        console.log("done")

    })
   
    
 
 
    
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    addElementFunction()
    store()

})
btn.addEventListener("click", (e) => {
    e.preventDefault();
    addElementFunction()
    
})


function remove() {
    const element = containerItem
    element.remove();
    
    
}rmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    remove()
    
    
})

//    container.innerHTML=  localStorage.clear("data")
