function dynamic_load_css(str_url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = str_url;
  link.type = "text/css";
  document.head.appendChild(link); //or something of the likes
}

dynamic_load_css("https://bossanova.uk/jexcel/v4/jexcel.css");
dynamic_load_css("https://bossanova.uk/jsuites/v3/jsuites.css");

function dynamic_load_js(str_url, func_onload = null) {
  var script = document.createElement("script");
  script.onload = func_onload;
  script.src = str_url;
  document.head.appendChild(script); //or something of the likes
}
function show_sheet() {
  let data = [
    ["Mazda", 2001, 2000],
    ["Pegeout", 2010, 5000],
    ["Honda Fit", 2009, 3000],
    ["Honda CRV", 2010, 6000]
  ];
  jexcel(document.getElementById("my-spreadsheet"), {
    data: data,
    columns: [
      { title: "Model", width: 300 },
      { title: "Price", width: 80 },
      { title: "Model", width: 100 }
    ]
  });
}
dynamic_load_js("https://bossanova.uk/jexcel/v4/jexcel.js", show_sheet);
dynamic_load_js("https://bossanova.uk/jsuites/v3/jsuites.js");
