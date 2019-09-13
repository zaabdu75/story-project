var lick = 0;
var cild = 0;
var sc = 0;
var lf = 0;


function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Life of Your"; // title

  document.getElementById('author').innerHTML="zayed"; // author



  // All of your code goes under here


  var story = '2000, you try to seek the new world outside ' + luck() + ' As you grow, you learn how to walk and speak, then ' + child() + 'When you are at seven, you seek to have an education,' + school() + 'You find a job after graduate, become a loyal slave for capital and capitalists. After enslaced by them ' + number() + ' years, you decided all decisions about your life that you can, ' + life();

  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function luck() {
  let lick = random(1, 6);
  if(lick > 5) {
    return "You were born in a rich family."
  } else if(lick = 4 || 5) {
    return "You were born in a normal family."
  } else if(lick < 4) {
    return "Your mental didn't develop when you born"
  }
}


function child() {
  let cild = random(1, 6);
  if(cild > 3) {
    return "you have growning up normaly. "
  } else {
    return "You have grown up as a lunatic "
  }
}


function school() {
  let sc = random(1, 6);
  if(sc = 5 || 6) {
    return " you go to private school."
  } else if(sc = 3 || 4) {
    return " you go to public school."
  } else if(sc < 3) {
    return " you can't go to school and not get good job in your life."
  }
}



function number() {
  let hours = Math.floor(random(1, 6));
  return hours
}

function life() {
  let lf = random(1, 6);
  if(lf = 6) {
    return "at the end, you died at 70"
  } else if(lf = 4 || 5) {
    return "at the end, you died at 50"
  } else if(lf < 4) {
    return "You suicided at 30"
  }
}

//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}
