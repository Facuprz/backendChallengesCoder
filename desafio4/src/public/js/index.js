let petForm = document.getElementById('petForm');

const handleSubmit = (evt,form,route) =>{
    evt.preventDefault();
    let formData = new FormData(form);

    fetch(route,{
        method:"POST",
        body:formData
    })
}
petForm.addEventListener('submit',(e)=>handleSubmit(e,e.target,'/pets'))
