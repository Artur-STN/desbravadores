function closeMenu() {
    
    let nav = document.getElementById('nav')
    let bars = document.getElementById('bars')

    if (!nav.classList.contains('active')) {
        
        nav.classList.add('active')
        bars.classList.add('active')

    } else if (nav.classList.contains('active')) {
        
        nav.classList.remove('active')
        bars.classList.remove('active')

    }

}