document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('bubble')) {
            event.target.remove();
        }
    });

    setInterval(createBubble, 1000);

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const diameter = Math.floor(Math.random() * 50) + 30;
        const x = Math.random() * (container.clientWidth - diameter);
        const y = Math.random() * (container.clientHeight - diameter);

        bubble.style.width = `${diameter}px`;
        bubble.style.height = `${diameter}px`;
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        container.appendChild(bubble);
    }
});
