document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("registerEmail").value.trim().toLowerCase();
  const password = document.getElementById("registerPassword").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find(u => u.email === email)) {
    alert("User already exists!");
    return;
  }

  const newUser = {
    fullName,
    email,
    password,
    role: "student",
    paid: 1000
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "succes.html";
});

document.getElementById("studentLoginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("studentEmail").value.trim().toLowerCase();
  const password = document.getElementById("studentPassword").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password && u.role === "student");

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    window.location.href = "dashboard-student.html";
  } else {
    alert("Invalid student credentials.");
  }
});

document.getElementById("lecturerLoginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("lecturerEmail").value.trim().toLowerCase();
  const password = document.getElementById("lecturerPassword").value;

  const lecturerEmail = "naboagye@gmail.com";
  const lecturerPassword = "123456";

  if (email === lecturerEmail && password === lecturerPassword) {
    localStorage.setItem("loggedInUser", JSON.stringify({ fullName: "Dr. Nana Aboagye", role: "lecturer" }));
    window.location.href = "dashboard-lecturer.html";
  } else {
    alert("Invalid lecturer credentials.");
  }
});