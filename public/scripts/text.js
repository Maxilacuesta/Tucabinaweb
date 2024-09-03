
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.querySelector('.foto-texto h1');
    const triggerPoint = h1.getBoundingClientRect().top + window.scrollY;

    function handleScroll() {
        if (window.scrollY > triggerPoint - window.innerHeight / 2) {
            document.querySelector('.foto-texto').classList.add('visible');
        } else {
            document.querySelector('.foto-texto').classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llama a la función al cargar para el caso inicial
});
