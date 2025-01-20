function startCountdown(id, endDate) {
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      document.getElementById(id).innerText = "الوقت انتهى!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(id).innerText = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

// أمثلة لتواريخ العد التنازلي
const date1 = new Date("2025-02-01T00:00:00").getTime();
const date2 = new Date("2025-03-01T12:00:00").getTime();

startCountdown("timer1", date1);
startCountdown("timer2", date2);
