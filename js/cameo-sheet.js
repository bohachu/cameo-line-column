import { load_js, load_css } from "./cameo_load.js";
load_css("https://bossanova.uk/jsuites/v3/jsuites.css");
load_css("https://bossanova.uk/jexcel/v4/jexcel.css");
load_js("https://bossanova.uk/jsuites/v3/jsuites.js");
load_js("https://bossanova.uk/jexcel/v4/jexcel.js", define_tag);

class CameoSheet extends HTMLElement {
  connectedCallback() {
    this.str_random_id = "id_" + Math.random().toString(36).substr(2, 9);
    this.innerHTML = `
      <div id="my-spreadsheet" id="${this.str_random_id}"></div>
    `;
    this.render();
  }
  async load_meta_csv() {
    // let df = await DataFrame.fromCSV(
    //   `${window.location.href}/data/cameo_line_column_meta.csv`
    // );
    // let ary = df.transpose().toArray();
    // let ary_keys = ary[0];
    // let ary_values = ary[1];
    // this.dic_meta = {};
    // ary_keys.forEach((str_key, i) => (this.dic_meta[str_key] = ary_values[i]));
  }
  async load_data_csv() {
    // let df = await DataFrame.fromCSV(
    //   `${window.location.href}/${this.dic_meta["資料檔案"]}`
    // );
    // df = df.transpose();
    // let ary = df.toArray();
    // return ary;
  }
  async render() {
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
}
function define_tag() {
  customElements.define("cameo-sheet", CameoSheet);
}
