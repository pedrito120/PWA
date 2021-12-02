viewPdf();

function viewPdf() {
    let favoritosRes = document.querySelector('#llenar');
    favoritosRes.innerHTML = '';
    favoritos = JSON.parse(localStorage.getItem("viewPdf"));
    favoritosRes.innerHTML += `
    <iframe style = "float: right;" src="data:application/pdf;base64,${favoritos[0].base64_file} " width="100%" height="635"> </iframe>
    `;
}
