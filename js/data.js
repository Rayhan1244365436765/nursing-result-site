/* =====================================================================
   DEMO DATABASE — National Council of Training Academy (NCTA)
   ---------------------------------------------------------------------
   This file is the "database" of the demo version of the site.
   Each object inside the STUDENTS array is one student record.

   To add a student: copy one object below, paste it after the last one
   and change the values. Save the file, refresh the page — done.

   Fields:
     registration_number : string  (used for search)
     passing_year        : string  (used for search)
     student_name        : string
     class_name          : string  (course / trade name)
     roll_no             : string
     date_of_birth       : string
     father_name         : string
     mother_name         : string
     institute           : string
     email               : string
     mobile              : string
     result              : string  ("Passed" / "Failed")
     gpa                 : string
     certificate_info    : string  (certificate number / info)
     photo               : string  (optional image path, "" = avatar placeholder)
     subjects            : array of { name, marks, gpa, grade }
     duration / marksheet_no / date_of_issue : optional extra info (not displayed)
   ===================================================================== */

const STUDENTS = [
  {
    registration_number: "11008",
    passing_year: "2024",
    student_name: "MD. Korimul Islam",
    class_name: "DDT (Diploma in Dental Technology)",
    roll_no: "3006",
    date_of_birth: "2006-02-01",
    father_name: "MD. Shaheen Hosen",
    mother_name: "MST. Kamina Khatun",
    institute: "Neuron paramedical and nursing Institute",
    email: "",
    mobile: "",
    result: "Passed",
    gpa: "4",
    certificate_info: "NCTA-2024-11008",
    photo: "",
    subjects: [
      { name: "Oral and dental anatomy", marks: 75, gpa: 4, grade: "A" },
      { name: "Pharmacology", marks: 79, gpa: 4, grade: "A" },
      { name: "Conservative dentistry", marks: 74, gpa: 4, grade: "A" },
      { name: "Chemistry of dental materials", marks: 72, gpa: 4, grade: "A" },
      { name: "Oral pathology", marks: 78, gpa: 4, grade: "A" },
      { name: "Dental surgery", marks: 79, gpa: 4, grade: "A" },
      { name: "Practical", marks: 77, gpa: 4, grade: "A" }
    ]
  },
  {
    registration_number: "11009",
    passing_year: "2024",
    student_name: "Fatema Akter",
    class_name: "Diploma in Nursing",
    roll_no: "3007",
    date_of_birth: "2005-06-12",
    father_name: "Md. Abdul Karim",
    mother_name: "Rahima Begum",
    institute: "Neuron paramedical and nursing Institute",
    email: "fatema.akter@example.com",
    mobile: "01712-345678",
    result: "Passed",
    gpa: "4.43",
    certificate_info: "NCTA-2024-11009",
    photo: "",
    subjects: [
      { name: "Anatomy & Physiology", marks: 82, gpa: 5, grade: "A+" },
      { name: "Microbiology", marks: 78, gpa: 4, grade: "A" },
      { name: "Fundamentals of Nursing", marks: 85, gpa: 5, grade: "A+" },
      { name: "Community Health Nursing", marks: 76, gpa: 4, grade: "A" },
      { name: "Pharmacology", marks: 74, gpa: 4, grade: "A" },
      { name: "Midwifery & Gynaecology", marks: 80, gpa: 5, grade: "A+" },
      { name: "Practical (Clinical)", marks: 79, gpa: 4, grade: "A" }
    ]
  },
  {
    registration_number: "11007",
    passing_year: "2023",
    student_name: "Md. Rakib Hasan",
    class_name: "Diploma in Nursing",
    roll_no: "3005",
    date_of_birth: "2004-11-03",
    father_name: "Md. Rafiqul Islam",
    mother_name: "Shirin Akter",
    institute: "Neuron paramedical and nursing Institute",
    email: "",
    mobile: "",
    result: "Passed",
    gpa: "3.83",
    certificate_info: "NCTA-2023-11007",
    photo: "",
    subjects: [
      { name: "Anatomy & Physiology", marks: 70, gpa: 4, grade: "A" },
      { name: "Microbiology", marks: 68, gpa: 3.5, grade: "A-" },
      { name: "Fundamentals of Nursing", marks: 72, gpa: 4, grade: "A" },
      { name: "Community Health Nursing", marks: 66, gpa: 3.5, grade: "A-" },
      { name: "Pharmacology", marks: 71, gpa: 4, grade: "A" },
      { name: "Midwifery & Gynaecology", marks: 74, gpa: 4, grade: "A" },
      { name: "Practical (Clinical)", marks: 69, gpa: 3.5, grade: "A-" }
    ]
  },
  {
    registration_number: "10025369",
    passing_year: "2025",
    student_name: "Md Sujan",
    class_name: "Diploma in Rural Medical Practitioner (DRMP)",
    roll_no: "254605",
    date_of_birth: "2003-11-06",
    father_name: "Md Nurul Islam",
    mother_name: "Kulsum Bibi",
    institute: "National Council of Training Academy",
    email: "",
    mobile: "",
    result: "Passed",
    gpa: "4.00",
    certificate_info: "NCTA-2025-10025369",
    photo: "image/sujan.jpeg",
    /* extra details — stored for reference only, not shown on the result page */
    duration: "4 Years",
    marksheet_no: "014568",
    date_of_issue: "2026-01-01",
    subjects: [
      { name: "Anatomy & Physiology", marks: 80, gpa: 4, grade: "A" },
      { name: "General Pathology", marks: 84, gpa: 4, grade: "A" },
      { name: "Health & Hygiene", marks: 75, gpa: 4, grade: "A" },
      { name: "Primary Health Care", marks: 79, gpa: 4, grade: "A" },
      { name: "Practice of Medicine", marks: 80, gpa: 4, grade: "A" },
      { name: "Practical (Project Based)", marks: 71, gpa: 4, grade: "A" }
    ]
  }
];
