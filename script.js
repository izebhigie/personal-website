import { inject } from '@vercel/analytics';
 
inject();

document.addEventListener('DOMContentLoaded', () => {
    const updateTime = () => {
        const now = new Date();
        const time = now.toUTCString().split(' ')[4];
        const day = now.toUTCString().split(',')[0];

        document.getElementById('time').textContent = time;
        document.getElementById('day').textContent = day;
    };

    updateTime();
    setInterval(updateTime, 1000);
});

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}