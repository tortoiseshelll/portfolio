document.addEventListener("DOMContentLoaded", (_) => {
  let circle_btns = document.querySelectorAll(".circle-btn");
  circle_btns.forEach((btn) => {
    // first add an event listener to the buttons
    btn.addEventListener("click", (e) => {
      // deselect the currently selected one
      // we put in the ? in case it doesn't exist yet
      document.querySelector(".block.active")?.classList.remove("active");
      // now activate the one I clicked on - e.target here represents the button clicked
      e.target.closest(".block").classList.add("active");
    });
  });
});
