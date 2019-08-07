// function submitform(event){
//     console.log(event);
// }

const form = document.getElementById('myform');
form.addEventListener('submit', ()=>{
     event.preventDefault();
    var formData = new FormData(form);
    var object = {};
    formData.forEach((value, key) => {object[key] = value});
    var json = JSON.stringify(object);

   fetch('http://localhost:3000',{
       method : "post",
       headers:{
        'Content-Type': 'application/json'
      },
       body: json
   })
        .then(res => res.json())
        .then(data => console.log(data));
  
})