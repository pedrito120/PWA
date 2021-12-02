// $("#myForm").submit(function (event) {
//     event.preventDefault()
//     var html = $("#url").val()
//     var access_key = "d4d5311c6d739cacbb848c31e498a799"

//     // console.log(html)
//     // window.location.href = "https://v2.convertapi.com/convert/web/to/pdf?Secret=BP2cC3XMTeVZZD90&Url=" + html + "&page_size=A4&encryption=128"
//     $.ajax({
//         method: 'GET',
//         url: "https://v2.convertapi.com/convert/web/to/pdf?Secret=BP2cC3XMTeVZZD90&Url=" + html ,
//         success: function (data) {
//             console.log(data.Files[0].FileData)
//             localStorage.setItem("prueba",data.Files[0].FileData)
//         }
//     })

// })

$("#myForm").submit(function (event) {
    event.preventDefault()
    var titulo = $('#titulo').val()
    var url = $("#url").val()
    let pdfs1 = [];
    pdfarray = JSON.parse(localStorage.getItem("pdf"));
    if (pdfarray) {
        pdfs1 = pdfarray;
    } else {
        pdfs1 = [];
    }
    // console.log(html)
    // window.location.href = "http://api.pdflayer.com/api/convert?access_key=d4d5311c6d739cacbb848c31e498a799&document_url=" + html + "&page_size=A4&encryption=128"
    const r = pdfs1.filter(r => r.titulo == titulo && r.urlweb == url);
    if (r.length == 0) {
        $.ajax(
            {
                method: 'GET',
                url: "https://v2.convertapi.com/convert/web/to/pdf?Secret=BP2cC3XMTeVZZD90&Url=" + url+"&AdBlock=true&CookieConsentBlock=true&Background=false",
                success: function (data) {
                    console.log(data);
                    if (data.Files[0].FileData) {
                       
                        var array = {
                            titulo: titulo,
                            urlweb: url,
                            base64_file: data.Files[0].FileData
                        }
                        console.log(array);
                        pdfs1.push(array);
                        console.log(pdfs1);
                        localStorage.setItem("pdf", JSON.stringify(pdfs1));
                        window.location.href = "pdfs.html";

                    } else {
                        alert("No existe esta pagina o se rechazo la peticion")
                    }

                }
            })
    } else {
        alert("ya existe un archivo con el  mismo nombre o url");

    }


})

$("#formqr").submit(function (event) {
    event.preventDefault()
    var titulo = $('#nametitulo').val()
    var url = $("#datosqr").val()
    let pdfs1 = [];
    pdfarray = JSON.parse(localStorage.getItem("pdf"));
    if (pdfarray) {
        pdfs1 = pdfarray;
    } else {
        pdfs1 = [];
    }
    // console.log(html)
    // window.location.href = "http://api.pdflayer.com/api/convert?access_key=d4d5311c6d739cacbb848c31e498a799&document_url=" + html + "&page_size=A4&encryption=128"
    const r = pdfs1.filter(r => r.titulo == titulo && r.urlweb == url);
    if (r.length == 0) {
        $.ajax(
            {
                method: 'GET',
                url: "https://v2.convertapi.com/convert/web/to/pdf?Secret=BP2cC3XMTeVZZD90&Url=" + url+"&AdBlock=true&CookieConsentBlock=true&Background=false",
                success: function (data) {
                    console.log(data);
                    if (data.Files[0].FileData) {
                       
                        var array = {
                            titulo: titulo,
                            urlweb: url,
                            base64_file: data.Files[0].FileData
                        }
                        console.log(array);
                        pdfs1.push(array);
                        console.log(pdfs1);
                        localStorage.setItem("pdf", JSON.stringify(pdfs1));
                        window.location.href = "pdfs.html";

                    } else {
                        alert("No existe esta pagina o se rechazo la peticion")
                    }

                }
            })
    } else {
        alert("ya existe un archivo con el  mismo nombre o url");

    }


})
// viewPdf();

// function viewPdf() {
//     let favoritosRes = document.querySelector('#llenar');
//     favoritosRes.innerHTML = '';
//     favoritos = localStorage.getItem("prueba");
//     favoritosRes.innerHTML += `
//     <iframe style = "float: right;" src="data:application/pdf;base64,${favoritos} " width="100%" height="700"> </iframe>
//     `;
// }

// archivosPdf();
// function archivosPdf() {
//     let pdfs = document.querySelector('#llenarPdfs');
//     pdfs.innerHTML = '';
//     let array = [];

//     pdfarray = JSON.parse(localStorage.getItem("pdf"));
//     if (pdfarray) {
//         array = pdfarray;
//     } else {
//         array = [];
//     }
//     console.log(array);
//     if (array.length == 0) {
//         pdfs.innerHTML = `
//         <h1>Todavia no hay datos</h1>
//         `;
//     } else {
//         constador = 1;
//         for (let item of array) {
//             pdfs.innerHTML += `
//         <tr>
//         <th scope="row">${constador++}</th>
//              <td>${item.titulo}</td>
//              <td><button type="button" class="btn btn-info">info</button></td>
//          </tr>
//     `;
//         }
//     }
// }
