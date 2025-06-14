function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hour = now.getHours();
    const min = now.getMinutes().toString().padStart(2, '0');
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    clock.textContent = `${hour}:${min} ${ampm}`;
}
setInterval(updateClock, 1000);
updateClock();