/* =====================================================================
   National Council of Training Academy — Result Verification
   Plain JavaScript, no libraries.
   ===================================================================== */

(function () {
  "use strict";

  /* ---------- elements ---------- */
  var DB = (typeof STUDENTS !== "undefined" && Array.isArray(STUDENTS)) ? STUDENTS : [];

  var yearSelect    = document.getElementById("passingYear");
  var regInput      = document.getElementById("regNumber");
  var form          = document.getElementById("searchForm");
  var message       = document.getElementById("searchMessage");
  var searchSection = document.getElementById("searchSection");
  var resultSection = document.getElementById("resultSection");
  var resultCard    = document.getElementById("resultCard");
  var navToggle     = document.getElementById("navToggle");
  var navList       = document.getElementById("navList");

  /* ---------- helpers ---------- */
  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function showError(text) {
    message.className = "alert alert-error";
    message.textContent = text;
  }

  function hideMessage() {
    message.className = "alert hidden";
    message.textContent = "";
  }

  /* ---------- build the "Passing Year" dropdown from the data ---------- */
  (function buildYearOptions() {
    var years = {};
    ["2025", "2024", "2023", "2022", "2021"].forEach(function (y) { years[y] = true; });
    DB.forEach(function (student) {
      if (student.passing_year) { years[String(student.passing_year)] = true; }
    });

    Object.keys(years).sort().reverse().forEach(function (year) {
      var option = document.createElement("option");
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });
  })();

  /* ---------- avatar placeholder (used when photo is empty) ---------- */
  var AVATAR_SVG =
    '<svg viewBox="0 0 140 150" role="img" aria-label="Student photo placeholder" xmlns="http://www.w3.org/2000/svg">' +
      '<rect width="140" height="150" fill="#e9edf3"></rect>' +
      '<circle cx="70" cy="55" r="25" fill="#b7c3d2"></circle>' +
      '<path d="M20 150c0-27 22-46 50-46s50 19 50 46z" fill="#b7c3d2"></path>' +
    "</svg>";

  function metaLine(label, value) {
    return '<div class="meta-line"><span class="meta-label">' + esc(label) +
           '</span><span class="meta-colon">:</span><span class="meta-value">' + esc(value) + "</span></div>";
  }

  function detailRow(label1, value1, label2, value2, checkPassed) {
    var passClass = (checkPassed && String(value1).toLowerCase() === "passed") ? " d-pass" : "";
    return '<div class="d-row">' +
             '<div class="d-cell d-label">' + esc(label1) + "</div>" +
             '<div class="d-cell' + passClass + '"><span>' + esc(value1) + "</span></div>" +
             '<div class="d-cell d-label">' + esc(label2) + "</div>" +
             '<div class="d-cell">' + esc(value2) + "</div>" +
           "</div>";
  }

  /* ---------- render one student's result card ---------- */
  function renderResult(student) {
    var photo = student.photo
      ? '<img src="' + esc(student.photo) + '" alt="' + esc(student.student_name) + '">'
      : AVATAR_SVG;

    var subjectRows = (student.subjects || []).map(function (subject, index) {
      return "<tr>" +
               '<td class="col-no">' + (index + 1) + "</td>" +
               "<td>" + esc(subject.name) + "</td>" +
               '<td class="center">' + esc(subject.marks) + "</td>" +
               '<td class="center">' + esc(subject.gpa) + "</td>" +
               '<td class="grade-cell"><span>' + esc(subject.grade) + "</span></td>" +
             "</tr>";
    }).join("");

    resultCard.innerHTML =
      '<div class="student-head">' +
        '<div class="student-meta">' +
          metaLine("Name", student.student_name) +
          metaLine("Class", student.class_name) +
          metaLine("Roll No", student.roll_no) +
          metaLine("Regi No", student.registration_number) +
        "</div>" +
        '<div class="student-name">' + esc(student.student_name) + "</div>" +
        '<div class="student-photo">' + photo + "</div>" +
      "</div>" +

      '<div class="details-table">' +
        detailRow("Roll No", student.roll_no, "Name", student.student_name) +
        detailRow("Regi No", student.registration_number, "Class", student.class_name) +
        detailRow("Date of Birth", student.date_of_birth, "Fathers Name", student.father_name) +
        detailRow("Mothers Name", student.mother_name, "Institute", student.institute) +
        detailRow("Email", student.email, "Mobile No", student.mobile) +
        detailRow("Result", student.result, "Year", student.passing_year, true) +
        detailRow("GPA", student.gpa, "Certificate Info", student.certificate_info) +
      "</div>" +

      '<div class="grade-head">Grade Sheet</div>' +
      '<table class="grade-table">' +
        "<thead><tr>" +
          '<th class="col-no">No.</th>' +
          '<th class="col-subject">Subject</th>' +
          '<th class="col-marks">Marks<span class="sub">Exam Marks</span></th>' +
          '<th class="col-gpa">GPA<span class="sub">Number Points</span></th>' +
          '<th class="col-grade">Grade<span class="sub">Letter Grade</span></th>' +
        "</tr></thead>" +
        "<tbody>" + subjectRows + "</tbody>" +
      "</table>";

    /* if the student photo file is missing, fall back to the avatar placeholder */
    var photoEl = resultCard.querySelector(".student-photo img");
    if (photoEl) {
      photoEl.addEventListener("error", function () {
        photoEl.parentNode.innerHTML = AVATAR_SVG;
      });
    }
  }

  /* ---------- search ---------- */
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    hideMessage();

    var year = yearSelect.value.trim();
    var reg  = regInput.value.trim();

    if (!year) {
      showError("Please select your passing year.");
      yearSelect.focus();
      return;
    }
    if (!reg) {
      showError("Please enter your registration number.");
      regInput.focus();
      return;
    }

    var student = DB.find(function (item) {
      return String(item.passing_year) === year &&
             String(item.registration_number).toLowerCase() === reg.toLowerCase();
    });

    if (!student) {
      showError("No information found. Please check your passing year and registration number and try again.");
      return;
    }

    renderResult(student);
    searchSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    document.body.classList.add("result-mode");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- actions ---------- */
  document.getElementById("printBtn").addEventListener("click", function () {
    window.print();
  });

  document.getElementById("againBtn").addEventListener("click", function () {
    resultSection.classList.add("hidden");
    searchSection.classList.remove("hidden");
    document.body.classList.remove("result-mode");
    form.reset();
    hideMessage();
    window.scrollTo({ top: 0, behavior: "smooth" });
    regInput.focus();
  });

  /* ---------- mobile menu ---------- */
  navToggle.addEventListener("click", function () {
    var isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
})();
