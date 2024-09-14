const panels = [...document.querySelectorAll('.panel')];    
panels.forEach(panel => panel.addEventListener('click', () => {
    // following command can be used to make sure that only one element is active with the certain class
    // const toggler = document.querySelector('.open-active'); 
    // if (toggler) {
    //     toggler.classList.remove('open-active');
    // }
    panel.classList.toggle('open');
}));

panels.forEach(panel => panel.addEventListener('transitionend', (e) => {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) panel.classList.toggle('open-active');
}));