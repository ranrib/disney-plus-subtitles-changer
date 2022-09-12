
function addStyle(styleString) {
  const style = document.createElement('style');
  style.textContent = styleString;
  document.head.append(style);
}

if (document.location.host.includes(".disneyplus.")) {
  addStyle('.shaka-text-container > span { font-family: Arial !important; font-size: 50px !important; background-color: rgba(0, 0, 0, 0.0) !important; -webkit-text-fill-color: white; -webkit-text-stroke-color: black; -webkit-text-stroke-width: 1.00px; width: 1000px !important; }')
}
