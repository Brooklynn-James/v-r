var myobject = {
  vine:"http://www.kgmbiz.com/wp-content/uploads/2015/05/vine-logo.png", 
  
  'it is wednesday my dudes':"https://i.ytimg.com/vi/du-TY1GUFGk/hqdefault.jpg",
  
 'there is only one thing worse than a rapist': 'http://s1.storage.akamai.coub.com/get/b184/p/coub/simple/cw_timeline_pic/baeaf8076cc/13acf14fa312202fff9a1/med_1506200458_image.jpg',
  
  adam:"https://i.ytimg.com/vi/kZSfPPJ4Fk8/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBFWRhQvBVOvtCXcFcJfCne-pzRBg",
  
  'chris is that a weed':"https://i.ytimg.com/vi/g6cIYDvFS-U/hqdefault.jpg",
  
  'stop I couldve dropped my croissant':"https://i.ytimg.com/vi/hRFUZBXOWZI/hqdefault.jpg",
  
  patricia:"https://i.ytimg.com/vi/Q1nlQXtqvnY/hqdefault.jpg",
  
  'road work ahead':"https://assets.rbl.ms/16953297/980x.jpg",
  
  'what up im jared':"https://assets.rbl.ms/17112438/980x.jpg",
  
  'welcome to chilis':"https://images1.dallasobserver.com/imager/u/745xauto/8853432/screengrab_irham_youtube_welcome_to_chili_s_martinez.jpg",
  
  'i cant believe youve done this':"https://i.ytimg.com/vi/_nK4JF8L23c/hqdefault.jpg",
  
 'take on me':"https://i.ytimg.com/vi/yYhzKW0I-Fk/hqdefault.jpg",
  
  'when life gives you lemons':"https://v.cdn.vine.co/r/thumbs/F63933B8B01141763904460980224_2.5.1.5529607009767109619.mp4.jpg?versionId=grykH25q9lvJ2DgSgUIhBM4AFDJwmaw_",
  
  'lebron james':"https://v.cdn.vine.co/r/thumbs/90A66AB70F1094430857206321152_1403906826919_imagef389b591da.jpg?versionId=O6uJ9Y381X3YvMqW6Mtcbs_3f4q7wQ7U",
  
  'get down to del taco':"http://80skiparty.com/wp-content/uploads/2018/01/luxury-taco-meme-del-taco-fresh-avocado-vine-youtube-taco-meme.jpg",

}
//Start of function stuff 
function clicker(event) {
  var myinput = document.getElementById('myinput');
  var theText = myinput.value;
   var myimg = event.target;
  
  if (theText.length > 0){
    //set something here
    var hasMatch = false;
    
    for (var prop in myobject) {
      
    if (myobject.hasOwnProperty(prop)) {
        // do stuff
         if(prop.includes(theText)){
         var myimage = event.target;
         myimage.src = myobject[prop];
           hasMatch = true;
    } else{
      // this prop doesn't match
      //maybe another one does?
      
     }
    }
   }
    // it is done looping
    // are there any matches?
    //is hasMatch still false?
    if (hasMatch === false){
 
      myimg.src = "https://brooklynn-james.github.io/v-r/word-art.png"
}  
  } else {
    myimg.src = "http://www.kgmbiz.com/wp-content/uploads/2015/05/vine-logo.png"
  }
 
 } 

var mybutton = document.getElementById('mybutton');
mybutton.addEventListener('click', clicker);