<!DOCTYPE html>
<html>
  <body>
    <button id="copyBtn">Copiar texto</button>
    <input type="text" id="inputBox" placeholder="Pega aquí">
    <script>
      const copyBtn = document.getElementById("copyBtn");
      const inputBox = document.getElementById("inputBox");

      copyBtn.addEventListener("click", () => {
        navigator.clipboard.readText().then((text) => {
          inputBox.value = text;
        });
      });
    </script>
  </body>
</html>
