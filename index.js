// Select all tab buttons and content sections
const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content");

// Loop through each tab button to add a click event listener
tabs.forEach((tab, index) => {
  // Add a click event to each tab button
  tab.addEventListener("click", (e) => {
    // Remove the 'active' class from all tabs to reset
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // Add the 'active' class to the clicked tab
    tab.classList.add("active");

    // Get the text-line element and adjust its size and position
    let text_line = document.querySelector(".text-line");
    // Set the width of the text-line to match the clicked tab's width
    text_line.style.width = e.target.offsetWidth + "px";
    // Set the left position of the text-line to align under the clicked tab
    text_line.style.left = e.target.offsetLeft + "px";

    // Remove the 'active' class from all content sections
    all_content.forEach((content) => {
      content.classList.remove("active");
    });

    // Add the 'active' class to the content corresponding to the clicked tab
    all_content[index].classList.add("active");
  });
});
