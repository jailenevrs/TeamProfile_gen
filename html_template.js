const generateHTML = function() {
    `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  </head>
  <body>
    <h1>My Team!</h1>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>`




//manager card
const generateManager =  function(manager){

`<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
    <p class="card-text"> ID:${manager.id}</p>
    <p class="card-text"> ID:${manager.officenumber}</p>
    <a href="#" class="card-link">${manager.email}</a>
  </div>
</div>`

}

//engineer card
 
const generateEnginer = function(Engineer){
    `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${Engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
    <p class="card-text"> ID:${Engineer.id}</p>
    <a href="#" class="card-link">${Engineer.email}</a>
    <a href="#" class="card-link">${Engineer.github}</a>
  </div>
</div>`
}
//Intern card
const generateIntern = function (Intern) {
   ` <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${Intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
    <p class="card-text">ID:${Intern.id}</p>
    <p class="card-text">ID:${Intern.school}</p>
    <a href="#" class="card-link">${Intern.email}</a>
    
  </div>
</div>`
}
}


//Export to index
module.exports = generateHTML;