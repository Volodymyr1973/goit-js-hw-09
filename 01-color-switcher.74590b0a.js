!function(){var e=document.querySelector("body"),t=document.querySelector(".box");t.style.display="flex",t.style.justifyContent="center",t.style.alignItems="center",t.style.marginTop="500px";var o=document.querySelector("button[data-start]");o.style.width="120px",o.style.height="40px",o.style.margin="4px",console.log(o);var l,n=document.querySelector("button[data-stop]");n.style.width="120px",n.style.height="40px",n.style.margin="4px",n.disabled=!0,console.log(n),o.addEventListener("click",(function(t){console.log(t),l=setInterval((function(){return e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),o.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(e){console.log(e),clearInterval(l),o.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.74590b0a.js.map