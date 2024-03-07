/* Mobile nav Scroll observer for nav-title active */
const menuItems = document.querySelectorAll('aside nav > ul > li a');
console.log(menuItems);
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const targetId = entry.target.getAttribute('id');
		if (entry.isIntersecting) {
			menuItems.forEach((menuItem) => {
				menuItem.classList.remove('active');
				if (menuItem.getAttribute('href') === `#${targetId}`) {
					menuItem.classList.add('active');
				}
			});
		}
	});
}, {
	/* threshold: 0.25 */
});

const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});




// Agrega un evento de clic a cada enlace del menú
menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', function(event) {
    // Remueve la clase 'active' de todos los enlaces
      menuItems.forEach((item) => {
        item.classList.remove('active');
      });
  
      // Agrega la clase 'active' al enlace clickeado
      this.classList.add('active');
    });
  });
  




console.log('current-section.js loaded');