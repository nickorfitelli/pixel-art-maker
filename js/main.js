function changeColor(id) {
    var pixel = document.getElementById(id);
    console.log(pixel)
    pixel.style.backgroundColor = "red";
    console.log("ok")
  }

  var createGrid = function(){
    var gridHolder = document.createElement("div");
    gridHolder.className = "wrapper";
    document.body.appendChild(gridHolder);

      for (let index = 0; index < 1024; index++) {
        var newDiv = document.createElement("div");
        newDiv.id = index;
        newDiv.className = "pixel"
        gridHolder.appendChild(newDiv);
      }

      document.querySelectorAll("div.pixel").forEach(item =>
        {
       item.addEventListener('click', event => 
       {
        var selected = document.getElementById("selected");
         item.style.backgroundColor = selected.style.backgroundColor;
       })
     })    
}

var createPaint = function(){
    
    document.querySelectorAll("div.paint").forEach(i =>
   {
       i.addEventListener('click', event =>
       {
        var selected = document.getElementById("selected");
           console.log(selected.style.backgroundColor);
           selected.style.backgroundColor = i.id;
       })
   })
}

createGrid();
window.addEventListener('load', createPaint)


