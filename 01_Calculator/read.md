``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <link
      rel="shortcut icon"
      href="./images/titleIcon.png"
      type="image/x-icon"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.7.0/remixicon.css"
      integrity="sha512-vgK7iuWG4Uq4GJHovntONntOoSduelAYImQTT3f0mvdUcI95qQgSmf4ldDhn/FNl3g/xouqOtsm/NxFqaTnxbA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <body>
    <div id="main">
      <div id="nav">
        <h2>BASIC <span>CALCULATOR</span></h2>
        <div id="toggle">
          <input type="checkbox" id="checkbox" />
          <h3>Mode</h3>
          <label for="checkbox" onclick="dark_lightMode()"
            ><i class="ri-toggle-line"></i
          ></label>
        </div>
      </div>
      <div id="content">
        <div class="calculator-Container">
          <div class="calc-display">
            <input type="text" id="display" disabled />
          </div>
          <div class="calc-items">
            <button class="allClear">AC</button>
            <button class="backspace">
              <i class="ri-delete-back-2-line"></i>
            </button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="operator">*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button class="operator">-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button class="operator">+</button>
            <button class="operator">/</button>
            <button>0</button>
            <button class="operator">%</button>
            <button class="equals">=</button>
          </div>
        </div>
        <div class="history">
          <div class="hist-part1">
            <h2>History</h2>
            <h2 onclick="deleteHistory()">
              <i class="ri-delete-bin-6-line"></i>
            </h2>
          </div>
          <div class="hist-part2">
            <ul class="list-items"></ul>
          </div>
        </div>
      </div>
    </div>
    <script src="./script.js"></script>
  </body>
</html>


```