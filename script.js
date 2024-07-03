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
