const rootElement = document.getElementById("metu");
console.log("sssssssssssssssssss");

if (!rootElement) {
  console.log("sssssssssssssssssss");
  let root = document.createElement("div");
  root.id = "metu";
  document.body.appendChild(root);

  const script = document.createElement("script");
  script.src = "https://unpkg.com/react@16/umd/react.production.min.js";
  script.async = true;

  const script1 = document.createElement("script");
  script1.src =
    "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js";
  script1.async = true;

  const script2 = document.createElement("script");
  script2.src = "https://unpkg.com/@babel/standalone/babel.min.js";
  script2.async = true;

  document.head.appendChild(script);

  document.head.appendChild(script1);

  document.head.appendChild(script2);
  <script src="index.js"></script>;
  //   const loadCss = (file) => {
  //     if (!file.startsWith("http")) {
  //       file = `https://menu.metu.vn/static/css/${file}`;
  //     }
  //     let link = document.createElement("link");
  //     link.rel = "stylesheet";
  //     link.href = file;
  //     link.async = true;
  //     document.head.appendChild(link);
  //   };
  //   const loadJs = (file) => {
  //     if (!file.startsWith("http")) {
  //       file = `https://menu.metu.vn/static/js/${file}`;
  //     }
  //     let script = document.createElement("script");
  //     script.src = file;
  //     script.async = true;
  //     document.head.appendChild(script);
  //   };
  //   ["2.5cf3cbfd.chunk.css", "main.f37137d4.chunk.css"].forEach((f) =>
  //     loadCss(f)
  //   );
  //   [
  //     "2.fd56d826.chunk.js",
  //     "main.fd498541.chunk.js",
  //     "runtime~main.a8a9905a.js",
  //   ].forEach((f) => loadJs(f));
}
