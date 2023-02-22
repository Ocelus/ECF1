var myInit = {  method: 'GET',
                mode: 'no-cors'};


window.onload = () => {
    let modalbtn = document.querySelector("#modalbtn");
    var aujd = new Date();
    var année = aujd.getFullYear();
    modalbtn.innerHTML = "Web design - ALECSI Laurent © " + année;

    modalbtn.addEventListener("click", () => {
        fetch("modal.html", myInit)
        .then(response =>{
            return response.text();
        })
        .then(data => {
            let modaltitre = document.querySelector("#staticBackdropLabel");
            modaltitre.innerHTML = "Ceci est une Modale";
            let modalbody = document.querySelector("#modal-body");
            modalbody.innerHTML = data;
        });
        const modal = new bootstrap.Modal('#staticBackdrop', {
            backdrop: 'static',
            keyboard: false
        })

        modal.show();
    });
};