console.log("window name " + window.name);
console.log("location.href", window.location.href);
fetch(`http://localhost:8080/api/v1/getMenuByStatus/${window.name}`, {
  method: "GET",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var maMN = data[0].id;
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      menuId: maMN,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/v1/activityMenu", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log("getActivityMenu", result))
      .catch((error) => console.log("error", error));
    fetch(`http://localhost:8080/api/v1/getButtonByIDMenu/${maMN}`, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data2) {
        console.log("bình", data2);

        const rootElement = document.getElementById("metu");

        if (!rootElement) {
          let root = document.createElement("div");
          root.id = "metu";
          document.body.appendChild(root);

          const html = data2
            .map((items) => {
              return `
                          <div id="metu">
                          <div style="position: fixed; top: 0px; left: 0px; right: 0px; z-index: 999999"></div>
                          <div class=" mmt-container mmt-container--full">
                            <div class="mmt-app">
                              <div
                                style="
                                  position: absolute;
                                  width: 100%;
                                  height: 100%;
                                  top: 0px;
                                  left: 0px;
                                  background-color:${items.menu.color_menu};
                                  opacity: 1;
                                  color: rgb(255, 255, 255);
                                  pointer-events: none;
                                  z-index: -1;">
                              </div>
                              <span class="mmt-menu__item" style="display: flex"
                               id="${items.id}" name="metuu">
                                <a href="${items.link}" style="text-decoration: none">
                                <div class="mt-tooltip" >
                                  <span class="mmt-button call" style="background-color:${items.color_background}">
                                    <img
                                      alt="url" style="height:30px;margin-right:20px"
                                      src="../images/${items.icon}"

                                      class="mmt-button__icon"/>
                                    <span  class="mmt-button__label" style="color: ${items.color_text}">${items.name_button}</span></span>
                                </div>
                                </a>
                                </span>
`;
            })
            .join("");
          root.innerHTML = html;
          console.log("root", root);
        }
      })
      .then(() => {
        const tab = document.getElementsByName("metuu");
        for (const it of tab) {
          it.addEventListener("click", () => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
              fromUrl: window.location.href,
              buttonId: it.id,
            });

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };

            fetch("http://localhost:8080/api/v1/activityButton", requestOptions)
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.log("error", error));
          });
        }
      });
  });
