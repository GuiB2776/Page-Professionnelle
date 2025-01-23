///--------------------------/// LIENS AUTOMATIQUES ///--------------------------///



///--------------------------/// MENU BURGER ///--------------------------///



///--------------------------/// ACCORDÉON ///--------------------------///

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const arrow = header.querySelector('.arrow');

        // Toggle visibility of the body
        body.classList.toggle('open');

        // Toggle arrow rotation
        arrow.classList.toggle('rotate');
    });
});

