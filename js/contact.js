// Khởi tạo EmailJS với Public Key của bạn
(function() {
  emailjs.init("2LcSgp7lqCm9UdFYz"); // Thay bằng Public Key trong Dashboard
})();

document.getElementById("sendBtn").addEventListener("click", function() {
  let status = document.getElementById("status");

  emailjs.send("service_nd42brk", "template_6e65qbp", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  })
  .then(() => {
    status.innerHTML = "✅ Gửi thành công!";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  })
  .catch((err) => {
    status.innerHTML = "❌ Lỗi gửi: " + err.text;
  });
});
