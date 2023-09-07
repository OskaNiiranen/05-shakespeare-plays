// Get all elements with the class "boxes"
const boxElements = document.querySelectorAll(".boxes");

// Loop through each .boxes element
boxElements.forEach((box) => {
  // Get a reference to the first <li> element within the current .boxes
  const firstLi = box.querySelector("li:first-of-type");

  // Add the .ulheaders class to the first <li> element
  firstLi.classList.add("ulheaders");

  // Get a reference to the first <ul> element within the current .boxes
  const firstUl = box.querySelector("ul:first-of-type");

  // Add the .ulboxes class to the first <ul> element
  firstUl.classList.add("ulboxes");

  // Apply inline styles to .ulheaders (list-style: none)
  firstLi.style.listStyle = "none";

  // Apply inline styles to .ulboxes (background: lightgray)
  firstUl.style.backgroundColor = "lightgray";
});

// Get all the <tr> elements in the first table
const trElementsFirstTable = document.querySelectorAll(".toka table tr");

// Loop through each <tr> element in the first table
trElementsFirstTable.forEach((tr, index) => {
  // Determine the background color based on the index
  const backgroundColor = index % 2 === 0 ? "white" : "lightgray";
  tr.style.backgroundColor = backgroundColor;
});

// Get all the <tr> elements in the second table
const trElementsSecondTable = document.querySelectorAll(".kolmas table tr");

// Loop through each <tr> element in the second table
trElementsSecondTable.forEach((tr, index) => {
  // Determine the background color based on the index (opposite of the first table)
  const backgroundColor = index % 2 === 0 ? "lightgray" : "white";
  tr.style.backgroundColor = backgroundColor;
});

// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get all <a> elements on the page
  const aElements = document.querySelectorAll("a");

  // Loop through each <a> element
  aElements.forEach((a) => {
    // Apply the desired styles to all <a> elements
    a.style.borderBottom = "dotted brown";
    a.style.fontStyle = "italic";
    a.style.fontWeight = "bold";
    a.style.color = "brown";
    a.style.textDecoration = "none";

    // Check if the href attribute contains ".pdf"
    if (a.getAttribute("href").includes(".pdf")) {
      // Create a new <i> element for PDF
      const pdfIcon = document.createElement("i");
      pdfIcon.className = "fa-solid fa-file-pdf";
      pdfIcon.style.color = "#CC392B";

      // Insert the PDF <i> element after the <a> element
      a.parentNode.insertBefore(pdfIcon, a.nextSibling);
    }

    // Check if the href attribute contains "mailto"
    if (a.getAttribute("href").includes("mailto")) {
      // Create the first <i> element for mail
      const mailIcon1 = document.createElement("i");
      mailIcon1.className = "fa-solid fa-envelope";
      mailIcon1.style.color = "#D98159";

      // Create the second <i> element for mail
      const mailIcon2 = document.createElement("i");
      mailIcon2.className = "fa-solid fa-arrow-up-right-from-square";
      mailIcon2.style.color = "#63A768";

      // Insert the mail <i> elements after the <a> element
      a.parentNode.insertBefore(mailIcon1, a.nextSibling);
      a.parentNode.insertBefore(mailIcon2, a.nextSibling);
    }

    // Check if the href attribute contains "https"
    if (a.getAttribute("href").includes("https")) {
      // Create a new <i> element for the HTTPS link
      const httpsIcon = document.createElement("i");
      httpsIcon.className = "fa-solid fa-arrow-up-right-from-square";
      httpsIcon.style.color = "#63A768";

      // Insert the HTTPS <i> element before the <a> element
      a.parentNode.insertBefore(httpsIcon, a);
    }
  });
});
