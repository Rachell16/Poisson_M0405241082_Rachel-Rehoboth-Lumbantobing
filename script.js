// Add interactive click effects
document.querySelectorAll(".card-hover").forEach((card) => {
  card.addEventListener("click", function () {
    this.style.transform = "scale(0.95) rotate(0deg)";
    setTimeout(() => {
      this.style.transform = "";
    }, 200);
  });
});

// Add sparkle effect on mouse move
document.addEventListener("mousemove", function (e) {
  if (Math.random() > 0.95) {
    createSparkle(e.clientX, e.clientY);
  }
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.innerHTML = "✨";
  sparkle.style.position = "fixed";
  sparkle.style.left = x + "px";
  sparkle.style.top = y + "px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.zIndex = "1000";
  sparkle.style.fontSize = "12px";
  sparkle.style.animation = "sparkle-fade 1s ease-out forwards";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
}

// Add sparkle animation
const style = document.createElement("style");
style.textContent = `
            @keyframes sparkle-fade {
                0% { opacity: 1; transform: scale(0) rotate(0deg); }
                50% { opacity: 1; transform: scale(1) rotate(180deg); }
                100% { opacity: 0; transform: scale(0) rotate(360deg); }
            }
        `;
document.head.appendChild(style);

// Add cute loading message
window.addEventListener("load", function () {
  console.log("🌸 Welcome to Rachel's page! 🌸");
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'97cb82e15533aa81',t:'MTc1NzQ3MTUwOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
