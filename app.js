const button = document.getElementById("submit");
const min = document.getElementById("min");
const max = document.getElementById("max");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  if (min.value === "" || max.value === "") {
    result.innerHTML = '<h4 class="text-warning">Please enter a number</h4>';
  } else {
    if (parseInt(min.value) > parseInt(max.value)) {
      result.innerHTML =
        '<h4 class="text-warning">Min is greater than max</h4>';
    } else {
      if (parseInt(min.value) < parseInt(max.value)) {
        const random =
          Math.floor(
            Math.random() * (parseInt(max.value) - parseInt(min.value) + 1)
          ) + parseInt(min.value);
        result.innerHTML = random;
      } else {
        result.innerHTML = '<h4 class="text-warning">Min is equal to max</h4>';
      }
    }
  }
});
