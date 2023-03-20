// btn.addEventListener("click",(e)=>{
// e.preventDefault()
// const searchh = search1.value
// localStorage.setItem("ANIME",JSON.stringify([searchh]))
// console.log(e)
// })
const key = "anime"
function pass(){
    var first = document.getElementById("search1").value
    localStorage.setItem(key,first)
    return false
  }

  console.log(localStorage.getItem(key))


