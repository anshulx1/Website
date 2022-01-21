burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click', () => {
    navBar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
})