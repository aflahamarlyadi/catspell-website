// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#navigation');
const CShamburgerMenu = document.querySelector('#navigation .toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('active');
	CSnavbarMenu.classList.toggle('active');
	CSbody.classList.toggle('open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#navigation .dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('active');
	};
	item.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelector('.gallery-images').addEventListener('click', function (e) {
        e.preventDefault();
        Fancybox.show([
			{
                src: "images/hero.jpg",
                caption: "Sleeping leopard kitten"
            },
            {
                src: "images/gallery-1.jpg",
                caption: "Orange tabby cat in brown cardboard box"
            },
            {
                src: "images/gallery-2.jpg",
                caption: "Brown and black cat on white textile"
            },
            {
                src: "images/gallery-3.jpg",
                caption: "A cat sitting on top of a wooden shelf"
            },
			{
                src: "images/gallery-4.jpg",
                caption: "Brown cat on white snow"
            },
			{
                src: "images/gallery-5.jpg",
                caption: "Short coated orange and white cat"
            },
			{
                src: "images/prices.jpg",
                caption: "Two cats lying on a couch"
            }
        ]);
    });
});