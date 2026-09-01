// ====================================================================
// GOOGLE APPS SCRIPT FOR STUDENT SURVEY WEBHOOK (100% FREE LIFETIME)
// ====================================================================
// Instructions:
// 1. Open Google Sheets (https://sheets.new)
// 2. Go to Extensions -> Apps Script
// 3. Delete existing code and paste this entire code
// 4. Click "Deploy" -> "New deployment"
// 5. Select Type: "Web App"
// 6. Set Description: "Student Survey Receiver"
// 7. Set Execute as: "Me"
// 8. Set Who has access: "Anyone" (IMPORTANT!)
// 9. Click "Deploy", Authorize access, and copy the "Web app URL"
// 10. Paste that Web App URL in your Survey App Admin Settings!
// ====================================================================

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getActiveSheet();
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submission ID",
        "Timestamp",
        "Full Name",
        "Roll Number",
        "Email",
        "Phone",
        "Gender",
        "Date of Birth",
        "Degree / Program",
        "Department",
        "Academic Year",
        "Semester",
        "Section",
        "CGPA / Percentage",
        "Course Satisfaction (1-5)",
        "Campus Facilities Rating (1-5)",
        "Career / Technical Interests",
        "Needs Placement Assistance",
        "Extracurriculars",
        "Feedback & Suggestions"
      ]);
      
      // Format header row
      var headerRange = sheet.getRange(1, 1, 1, 20);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#4F46E5");
      headerRange.setFontColor("#FFFFFF");
      sheet.setFrozenRows(1);
    }
    
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.id || "STU-" + new Date().getTime(),
      data.timestamp || new Date().toISOString(),
      data.fullName || "",
      data.rollNo || "",
      data.email || "",
      data.phone || "",
      data.gender || "",
      data.dob || "",
      data.degree || "",
      data.department || "",
      data.year || "",
      data.semester || "",
      data.section || "",
      data.cgpa || "",
      data.courseRating || "",
      data.facilitiesRating || "",
      Array.isArray(data.interests) ? data.interests.join(", ") : (data.interests || ""),
      data.placementAssistance || "",
      data.extracurriculars || "",
      data.feedback || ""
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Survey recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ "status": "online", "service": "Student Survey Webhook Active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
