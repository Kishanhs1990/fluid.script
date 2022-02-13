$(function () {
  $("select").on("change", function () {
    function getSelection(type) {
      let selected = {
        "0x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> Use the dropdown to get your component </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "1x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly><div class='image'><img class='image-square' src='../assets/images/image.png' alt='square-image' /></div></textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "2x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly>  <div class='image'><img class='image-circular' src='../assets/images/image.png' alt='circular-image' /></div></textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
      };
      return selected[type]();
    }
    getSelection(this.value);
  });
});
