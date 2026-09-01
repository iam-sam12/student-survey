# 🎓 EduSurvey: Student Details & Feedback Portal

A modern, responsive, and feature-rich **Student Survey Web Application** designed for **100% lifetime-free hosting** on Vercel, GitHub Pages, Cloudflare Pages, or Netlify with zero hosting fees, no server maintenance, and no credit card required.

---

## 🌟 Key Features

- 📝 **4-Step Intuitive Survey Wizard**:
  - **Personal & Contact Details**: Name, Student ID/Roll Number, Email, Phone, Gender, Date of Birth.
  - **Academic Profile**: Degree/Program, Department/Branch, Academic Year, Semester, Section, CGPA/Percentage.
  - **Experience & Feedback**: Interactive 5-star course satisfaction rating, campus infrastructure rating, clickable multi-select skills/interests, placement requirement, and open feedback.
  - **Review & Submit**: Full visual preview before final confirmation.
- 📊 **Executive Admin Analytics Dashboard**:
  - Protected by a customizable passcode (Default: `admin123`).
  - **Live KPI Metric Cards**: Total submissions, average course satisfaction rating, percentage of placement seekers, leading department.
  - **4 Interactive Visual Charts (Chart.js)**: Department distribution, academic year breakdown, satisfaction rating frequencies, and career interest trends.
  - **Search, Filter & Sort**: Filter by department, year, rating, placement status, or search student names and roll numbers in real-time.
  - **Detailed Student Profile Modal**: Inspect complete student answers and delete individual entries.
- 📥 **One-Click Data Export**:
  - **Export to Excel (`.xlsx`)**: Formatted spreadsheet ready for academic administration.
  - **Export to CSV (`.csv`)**: Universal data format.
  - **Print / PDF Summary**: Clean printable receipt and executive dashboard view.
- ☁️ **Flexible Lifetime-Free Backend Options**:
  1. **Built-in Offline / Browser Storage (Ready to use immediately)**.
  2. **Google Sheets Sync**: Auto-populate every student response into a live Google Sheet using our free 10-line Apps Script.
  3. **Supabase Cloud PostgreSQL**: Free 500MB PostgreSQL database with instant REST APIs.
- 🌓 **Dark Mode & Light Mode** with automatic system theme detection and instant toggle.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or run a lightweight local server:

```powershell
# Navigate into the project folder
cd C:\Users\manju\.gemini\antigravity\scratch\student-survey-app

# Start a local web server with Python
py -m http.server 3000
```
Then open your browser at: **`http://localhost:3000`**

---

## 🌐 100% Free Lifetime Hosting Guide

Choose any of the following platforms to get a live public website for your students:

### Option 1: Vercel (Recommended - Fastest)
1. Sign up for a free account at [Vercel](https://vercel.com).
2. Install Vercel CLI (or simply push this folder to a GitHub repository).
3. If using GitHub: Click **"Add New Project"** -> Select your repo -> Click **"Deploy"**.
4. In ~15 seconds, your survey site will be live at `https://your-survey-app.vercel.app` with free SSL and lifetime hosting!

### Option 2: Cloudflare Pages
1. Sign up for free at [Cloudflare](https://pages.cloudflare.com).
2. Go to **Workers & Pages** -> **Create application** -> **Pages** -> **Upload assets**.
3. Drag and drop the `student-survey-app` folder directly into Cloudflare!
4. Your site will instantly go live with unlimited bandwidth at `https://your-project.pages.dev`.

### Option 3: GitHub Pages
1. Create a new repository on GitHub (e.g. `student-survey`).
2. Push the files to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Student Survey App"
   git remote add origin https://github.com/YOUR_USERNAME/student-survey.git
   git push -u origin main
   ```
3. In GitHub, go to **Settings** -> **Pages** -> Under **Branch**, select `main` / `root` -> Click **Save**.
4. Your site is live at `https://YOUR_USERNAME.github.io/student-survey`.

---

## 📊 Connecting to Free Cloud Databases

### Option A: Google Sheets Integration (Zero database maintenance)
1. Create a new spreadsheet at [Google Sheets](https://sheets.new).
2. In the top menu, go to **Extensions** -> **Apps Script**.
3. Open the [`google-apps-script.js`](./google-apps-script.js) file from this repository and copy all code.
4. Replace the default code in the Apps Script editor with the copied script.
5. Click **Deploy** (top right) -> **New deployment**.
6. Select Type: **Web App**.
7. Set **Execute as**: `Me`, and **Who has access**: `Anyone` (Important).
8. Click **Deploy**, authorize permissions, and copy the **Web app URL**.
9. In your live Survey App, click the **Settings** icon (top right) and paste the Web app URL in the Google Sheets field.
10. *Every time a student submits a survey, it automatically adds a new row to your Google Sheet in real time!*

### Option B: Supabase PostgreSQL (Full relational database)
1. Create a free account at [Supabase](https://supabase.com) and start a new project.
2. In the left menu, open the **SQL Editor**.
3. Open the [`supabase-schema.sql`](./supabase-schema.sql) file from this repo and paste it into the editor, then click **Run**.
4. Go to **Project Settings** -> **API** and copy your **Project URL** and **`anon` public key**.
5. In your Survey App, open **Settings** (top right) and paste both keys.

---

## 🔐 Admin Portal Credentials

- **Default Passcode**: `admin123`
- You can change this passcode at any time directly in the **Settings** dialog inside the app.

---

## 📁 File Structure

```
student-survey-app/
├── index.html              # Main single-page survey application & admin dashboard
├── js/
│   └── app.js              # Complete interactive logic, charts, filters, export & storage
├── google-apps-script.js   # 100% free Google Sheets webhook connector
├── supabase-schema.sql     # Supabase PostgreSQL schema with Row Level Security
└── README.md               # Documentation and lifetime free hosting guide
```
