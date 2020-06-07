// 头部的js代码
import "./index.css";
import $ from "jquery";

let pathname = location.pathname;
if (pathname === "/") {
  pathname += "index.html";
}
$(".header-nav a").each((i, ele) => {
  const href = $(ele).attr("href");
  if (pathname === href) {
    ele.classList.add("header-nav-active");
  }
});
