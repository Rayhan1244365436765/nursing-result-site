# NCTA — Student Result & Certificate Verification

A tiny result-verification site for nursing students, built to match the
original NCTA design (see screenshots): ISO blue top bar, logo header,
dark navigation bar, verification form, and the full result card with
Grade Sheet.

No server, no build tools, no libraries — **100% HTML + CSS + JavaScript**.

## How to run

1. Open the folder `india`.
2. Double-click **`index.html`** (it opens in your browser).
3. Done.

To put it online, upload the whole folder (index.html, css/, js/) to any
static hosting (cPanel `public_html`, Netlify, GitHub Pages, etc.).

## Demo records

| Registration No | Passing Year | Student          |
|-----------------|--------------|------------------|
| `11008`         | `2024`       | MD. Korimul Islam|
| `11009`         | `2024`       | Fatema Akter     |
| `11007`         | `2023`       | Md. Rakib Hasan  |
| `10025369`      | `2024`       | Md Sujan         |

Any other combination shows **"No information found."**

## File structure

```
india/
├── index.html      → the only page (search view + result view)
├── css/style.css   → all styles (design matched to the screenshots)
├── js/data.js      → demo database (edit student records here)
├── js/app.js       → search / render / print / search-again logic
└── README.md
```

## Add or edit a student

Open `js/data.js` and copy/paste one object inside the `STUDENTS` array:

```js
{
  registration_number: "11010",
  passing_year: "2025",
  student_name: "New Student Name",
  class_name: "Diploma in Nursing",
  roll_no: "3008",
  date_of_birth: "2006-05-20",
  father_name: "Father Name",
  mother_name: "Mother Name",
  institute: "Neuron paramedical and nursing Institute",
  email: "",
  mobile: "",
  result: "Passed",
  gpa: "4.00",
  certificate_info: "NCTA-2025-11010",
  photo: "",                       // e.g. "images/11010.jpg" (optional)
  subjects: [
    { name: "Subject name", marks: 80, gpa: 5, grade: "A+" }
  ]
}
```

Save the file and refresh the page. The Passing Year dropdown is built
automatically from the data.

## Customising

- **Student photo** — put the image in an `images/` folder and set
  `photo: "images/11010.jpg"` in `data.js`. Leave `photo: ""` for the
  built-in avatar placeholder.
- **Logo** — the header logo is `image/logu.png`, displayed at 110px tall
  (78px on mobile) via the `.brand-logo-img` rule in `css/style.css`.
  To change it, replace that file (keeping the same name) or update the
  `src` in `index.html`.
- **Result heading** — the navy pill reads "Result". Change the text of
  `<div class="result-title">` in `index.html` if you prefer something else
  (for example "Result Sheet").
- **Result page background** — a blurred gradient is used instead of the
  photo in the screenshot. To use your own photo, add to the end of
  `css/style.css`:

  ```css
  body.result-mode {
    background: url("images/result-bg.jpg") center / cover fixed no-repeat;
  }
  ```

## Important note

This demo keeps all records in `js/data.js`, which is a client-side file —
anyone can view it with "View Source". That is fine for a demo/portfolio
site. For a real deployment with many students, move the records into
MySQL and answer the search with PHP (an `api.php` that returns only the
matched record). The frontend code in `app.js` is organised so that only
the data lookup part needs to change.
