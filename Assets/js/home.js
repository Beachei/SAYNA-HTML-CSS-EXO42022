/* PART 3 */
let btn = document.getElementById("alert")
btn.addEventListener("click", function(){
  alert("fuck you")
  swal(
    'Oops...',
    'Something went wrong!',
    'error'
  )
})