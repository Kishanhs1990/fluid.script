$(document).ready(function () {
  $("select").on("change", function () {
    console.log(this.value);
  });
});
