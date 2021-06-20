


// const email = localStorage.getItem('email')


fetch(`http://localhost:8080/api/v1/getMenuByStatus/nhan@gmail.com`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    var maMN = data[0].id_menu;
    console.log(data[0]);
    console.log(maMN)

    fetch(`http://localhost:8080/api/v1/getButtonByIDMenu/${maMN}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data2) {

        console.log('bình', data2)

        const rootElement = document.getElementById('metu')
        if (!rootElement) {

          let root = document.createElement('div');
          root.id = 'metu';
          document.body.appendChild(root);


          const html = data2.map((items) => {
            console.log(items.maBT);
            console.log(items.maMN);
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
                                z-index: -1;
                              "
                            ></div>
                            <span class="mmt-menu__item" style="display: flex"
                              ><div class="mt-tooltip" >
                                <span class="mmt-button call" style="background-color:${items.color_background}"   
                                  >
                                  <img
                                    alt="url" style="height:30px;margin-right:20px"
                                    src="../images/${items.icon}"
                                    class="mmt-button__icon"
                                  />
                                  
                                  <span  class="mmt-button__label" style="color: ${items.color_text}">${items.name_button}</span></span
                                >
                                <!-- <div class="mt-tooltip__text">chiều này</div> -->
                              </div></span
                            >
                            
                            
        `;
          }).join('');
          root.innerHTML = html;

        }

      });


  });

