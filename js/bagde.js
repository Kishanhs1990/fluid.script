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
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly><i class='fa fa-certificate fa-2x primary' aria-hidden='true'></i></textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "2x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <i class='fa fa-certificate fa-2x success' aria-hidden='true'></i> </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "3x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <i class='fa fa-certificate fa-2x info' aria-hidden='true'></i></textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "4x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <i class='fa fa-certificate fa-2x error' aria-hidden='true'></i> </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
      };
      return selected[type]();
    }
    getSelection(this.value);
  });
});
