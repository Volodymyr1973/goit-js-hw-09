!function(){var t=document.querySelector("body"),e=document.querySelector(".box");e.style.display="flex",e.style.justifyContent="center",e.style.alignItems="center",e.style.marginTop="500px";var o=document.querySelector("button[data-start]");o.style.width="120px",o.style.height="40px",o.style.margin="4px",console.log(o);var n,l=document.querySelector("button[data-stop]");l.style.width="120px",l.style.height="40px",l.style.margin="4px",console.log(l),o.addEventListener("click",(function(e){console.log(e),n=setInterval((function(){return t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),o.getAttribute("disabled","true"),o.style.color="gray",l.addEventListener("click",(function(t){console.log(t),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.bf7ea55c.js.map
