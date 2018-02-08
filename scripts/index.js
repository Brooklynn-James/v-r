var myobject = {
  vine:"dancer.jpeg", 
  
  'it is wednesday my dudes':"dancer.jpeg",
  
 'there is only one thing worse than a rapist': 'dancer.jpeg',
  
  adam:"dancer.jpeg",
  
  'chris is that a weed':"dancer.jpeg",
  
  'stop I couldve dropped my croissant':"dancer.jpeg",
  
  patricia:"dancer.jpeg",
  
  'road work ahead':"dancer.jpeg",
  
  'what up im jared':"dancer.jpeg",
  
  'welcome to chilis':"dancer.jpeg",
  
  'I cant belive youve done this':"dancer.jpeg",
  
 'take on me':"dancer.jpeg",
  
  'when life gives you lemons':"dancer.jpeg",
  
  'lebron james':"dancer.jpeg",
  
  'get down to del taco':"dancer.jpeg",

}
//Start of function stuff 
function clicker(event) {
  var myinput = document.getElementById('myinput');
  var theText = myinput.value;
  if (theText.length > 0){
    for (var prop in myobject) {
    if (myobject.hasOwnProperty(prop)) {
        // do stuff
         if(prop.includes(theText)){
         var myimage = event.target;
  myimage.src = myobject[prop];
    }
}
   }
  }
 }

var mybutton = document.getElementById('mybutton');
mybutton.addEventListener('click', clicker);
