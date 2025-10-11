// دالة التبديل بين إظهار وإخفاء القائمة
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuIcon = document.getElementById("menuIcon");

  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
}

// ربط الأيقونة بالضغط
 menuIcon.addEventListener("click", toggleMenu);