const countdownElement = document.getElementById('countdown');
const deadline = new Date("2025-06-15T23:59:59").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = deadline - now;

  if (distance < 0) {
    countdownElement.innerText = "Submission Closed";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  countdownElement.innerText = `Submission Deadline: 15 June 2025 – ${days} day(s) remaining`;
};

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60); // update every hour
