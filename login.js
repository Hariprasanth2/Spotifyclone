function login() {
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

  if (u.includes("@") && p.length >= 4) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText =
      "Enter valid email and password";
  }
}

function showPhone() {
  document.getElementById("phone-box").style.display = "block";
  document.getElementById("google-box").style.display = "none";
}

function showGoogle() {
  document.getElementById("google-box").style.display = "block";
  document.getElementById("phone-box").style.display = "none";
}

function login() {
  window.location.href = "dashboard.html"; 
}