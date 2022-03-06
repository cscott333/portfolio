const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const cdbounceleft = entry.target.querySelector('.bouncy');

        if (entry.isIntersecting) {
            cdbounceleft.classList.add('cd-bounce-left');
            return;
        }

        cdbounceleft.classList.remove('cd-bounce-left');
    });
});    



observer.observe(document.querySelector('.cd-intro'));

