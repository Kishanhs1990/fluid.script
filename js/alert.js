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
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly><div class='alert primary-alert'>Did you know it's been a while?</div></textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "2x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <div class='alert error-alert'> We're sorry we can't apply that discount </div> </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "3x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <div class='alert success-alert'> Your user registration was successful. </div> </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
        "4x": function () {
          return $("#textarea-container").html(
            "<div class='copy-container' id='textarea-container'><textarea class='code-highlight' rows='1' readonly> <div class='alert info-alert'>Was this what you wanted?</div> </textarea><button class='copy-button copy-code'>Copy</button></div>"
          );
        },
      };
      return selected[type]();
    }
    getSelection(this.value);
  });
});
