document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".submit-button");
  const input = document.querySelector(".input");
  let actionCompleted = false;

  button.addEventListener("click", handleButtonClick);

  function handleButtonClick() {
    if (actionCompleted) {
      return;
    }

    const icon = button.querySelector("i");
    icon.classList.remove("fas", "fa-search");
    icon.classList.add("fas", "fa-spinner", "fa-spin");
    button.disabled = true;
    input.disabled = true;

    setTimeout(function () {
      icon.classList.remove("fas", "fa-spinner", "fa-spin");
      icon.classList.add("fas", "fa-search");
      button.disabled = true;
      input.disabled = true;
      actionCompleted = true;
      input.classList.add("input-success");
      button.classList.add("button-success");
      button.style.backgroundColor = "#D9D9D9";
    }, 2000);
  }
});
