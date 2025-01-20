// العد التنازلي
function startCountdown(endDate) {
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = endDate - now;

    if (distance < 0) {
      document.getElementById("countdown").innerText = "الوقت انتهى!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${days} يوم ${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
  }

  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
}

// بدء العد التنازلي حتى 30 أكتوبر 2025
const countdownDate = new Date("2025-10-30T23:59:59").getTime();
startCountdown(countdownDate);

// تحديث بيانات الإنجاز
function updateProgress(target, achieved) {
  const percentage = Math.min((achieved / target) * 100, 100).toFixed(2);
  document.getElementById("achieved").innerText = achieved;
  document.getElementById("percentage").innerText = `${percentage}%`;
}

// إدخال البيانات الحالية
const targetBooks = 50; // المستهدف
const achievedBooks = 15; // المتحقق حتى الآن
updateProgress(targetBooks, achievedBooks);
