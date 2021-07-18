function toggle(){
  var classes = this.className;
  
  if (classes.indexOf('open') < 0) {
    classes += ' open';
  } else {
    classes = classes.replace(' open', '');
  }
  
  this.className = classes;
}

document.querySelector('.nav-trigger').addEventListener('click', toggle);