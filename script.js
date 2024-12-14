// Open Login Modal
function openLoginModal() {
    const modal = document.getElementById("login-modal");
    modal.classList.remove("hidden");
  }
  
  // Close Login Modal
  function closeLoginModal() {
    const modal = document.getElementById("login-modal");
    modal.classList.add("hidden");
  }
  
  // Handle Admin Login
  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "n" && password === "n") {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("error-message").classList.remove("hidden");
    }
  });
  
  // Tab Switching Logic
  function showTab(tabId, element) {
    const tabs = document.querySelectorAll(".tab-content");
    const tabButtons = document.querySelectorAll(".tab");
  
    // Hide all tabs and remove active state from buttons
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabButtons.forEach((button) => button.classList.remove("active-tab"));
  
    // Show the clicked tab and mark it as active
    document.getElementById(tabId).classList.add("active");
    element.classList.add("active-tab");
  }
  
  // Light/Dark Mode Toggle
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  }
  