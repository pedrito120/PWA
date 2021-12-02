archivosPdf();
function archivosPdf() {
    let pdfs = document.querySelector('#llenarPdfs');
    pdfs.innerHTML = '';
    let array = [];

    pdfarray = JSON.parse(localStorage.getItem("pdf"));
    if (pdfarray) {
        array = pdfarray;
    } else {
        array = [];
    }
    console.log(array);
    if (array.length == 0) {
        pdfs.innerHTML = `
        <h1>Todavia no hay datos</h1>
        `;
    } else {
        constador = 1;
        for (let item of array) {
            pdfs.innerHTML += `
        <tr>
        <th scope="row">${constador++}</th>
             <td>${item.titulo}</td>
             <td><button type="button" class="btn btn-info" onclick="view('${item.urlweb}','${item.titulo}')">VIEW PDF</button></td>
             
         </tr>
    `;
        }
    }
}



function view(web, titulo) {
    let pdfs1 = [];
    pdfarray = JSON.parse(localStorage.getItem("pdf"));
    if (pdfarray) {
        pdfs1 = pdfarray;
    } else {
        pdfs1 = [];
    }
    const r = pdfs1.filter(r => r.titulo == titulo && r.urlweb == web);

    console.log(r[0].base64_file);
    localStorage.setItem("viewPdf", JSON.stringify(r));
    window.location.href = "openPdf.html";
}


// function view2(data) {
//     var pdfData = data;
//     var pdfjsLib = window['pdfjs-2.10.377-dist/build/pdf'];

//     // The workerSrc property shall be specified.
//     pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs-2.10.377-dist/build/pdf.worker.js';

//     // Using DocumentInitParameters object to load binary data.
//     var loadingTask = pdfjsLib.getDocument({ data: pdfData });
//     loadingTask.promise.then(function (pdf) {
//         console.log('PDF loaded');

//         // Fetch the first page
//         var pageNumber = 1;
//         pdf.getPage(pageNumber).then(function (page) {
//             console.log('Page loaded');

//             var scale = 1.5;
//             var viewport = page.getViewport({ scale: scale });

//             // Prepare canvas using PDF page dimensions
//             var canvas = document.getElementById('the-canvas');
//             var context = canvas.getContext('2d');
//             canvas.height = viewport.height;
//             canvas.width = viewport.width;

//             // Render PDF page into canvas context
//             var renderContext = {
//                 canvasContext: context,
//                 viewport: viewport
//             };
//             var renderTask = page.render(renderContext);
//             renderTask.promise.then(function () {
//                 console.log('Page rendered');
//             });
//         });
//     }, function (reason) {
//         // PDF loading error
//         console.error(reason);
//     });
// }