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
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly><div> <button class='button button-contained'>Contained</button> </div></textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "2x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <div> <button class='button button-outlined'>Outlined</button> </div> </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "3x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <div> <button class='button button-link'>Link</button> </div> </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "4x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <div> <button class='button button-disabled'>Disabled</button> </div> </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
      };
      return selected[type]();
    }
    getSelection(this.value);
  });
});
