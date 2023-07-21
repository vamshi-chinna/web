const form = document.getElementById("form")
let result = document.getElementById("text")
const container = document.getElementById("container")



function addElementFunction() {
    const e = document.createElement("div");
    const task = document.createElement("div");
    const check = document.createElement("input")
    const rmBtn = document.createElement("button")
    check.type = "checkbox"
    check.setAttribute("class", "check")
    task.setAttribute("class", "task")
    rmBtn.setAttribute("class", "container-item-btn")
    e.setAttribute("class", "container-item")
    r = result.value;
    e.style.textTransform = "capitalize"
    rmBtn.innerHTML = "X"
    task.innerHTML = `${r}`
  
    e.append(check)
    e.append(task);
    e.append(rmBtn)
    container.append(e)


    result.value = " "
    function checkbox(){
        
        task.style.textDecoration="line-through"
        console.log("done")
    }
    check.addEventListener("click",(e)=>{
        e.preventDefault
        checkbox();
        console.log("done")

    })
    function remove() {
        const element = e
        element.remove();
    }
    rmBtn.addEventListener("click", (e) => {
        e.preventDefault();
        remove()

    })
    let n=check.value
    console.log(n)


}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addElementFunction()

})
btn.addEventListener("click", (e) => {
    e.preventDefault();
    addElementFunction()
})
