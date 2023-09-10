/* ================== Typing Animation ==================== */
let typed = new Typed('.typing', {
    strings: ["", "Web Developer", "Front-End Developer", "Back-End Developer", "Full-Stack Developer"],
    loop: true,
    typeSpeed: 100,
    BackSpeed: 60
})

function setActiveSection() {
    let scrollPos = window.scrollY;
    let sections = document.querySelectorAll('section[id]')
    let navItems = document.querySelectorAll('.nav a')

    for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const sectionId = currentSection.getAttribute('id')
        const navItem = document.querySelector('.nav-' + sectionId)

        if (currentSection.offsetTop <= scrollPos && currentSection.offsetTop + currentSection.offsetHeight > scrollPos) {
            navItems.forEach(item => {
                item.classList.remove('active')
            })
            navItem.classList.add('active')
        }
    }
}
window.addEventListener('scroll', setActiveSection)