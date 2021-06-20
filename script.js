function handleLeftNav() {
    const sub_1 = document.getElementById('sub_1');
    
    if(leftNav.classList.contains('left-nav-hidden')) {
      leftNav.classList.remove('left-nav-hidden');
    } else {
      leftNav.classList.add('left-nav-hidden'); 
    }
  }