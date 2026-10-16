// 共通：数値の読み取りと表示、BOOTH商品リンク
const SHOP = {
  delivery: "https://kakutei-sheet.booth.pm/items/8994481",
  sedori: "https://kakutei-sheet.booth.pm/items/8994641",
  handmade: "https://kakutei-sheet.booth.pm/items/8994710",
  freelance: "https://kakutei-sheet.booth.pm/items/8999096"
};
const num = id => { const v = parseFloat(String(document.getElementById(id).value).replace(/[,，円]/g, "")); return isNaN(v) ? 0 : v; };
const yen = v => Math.round(v).toLocaleString("ja-JP") + "円";
const pct = v => (isFinite(v) ? (v * 100).toFixed(1) : "-") + "%";
function bind(ids, fn) { ids.forEach(id => document.getElementById(id).addEventListener("input", fn)); fn(); }
document.querySelectorAll("[data-shop]").forEach(a => a.href = SHOP[a.dataset.shop]);
