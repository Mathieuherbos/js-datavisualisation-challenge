//                      CHART 1
// étape 5.1 CREER LE FICHIER AU BON ENDROIT DANS LE HTML

//            FORMULE SEB
/*let myChart = new Chart(ctx, {
            type: 'line',
            data: {
document.getElementById("table1").insertAdjacentHTML("beforebegin", '<canvas id="canvas1" height="400" width="400"></canvas>');
let canvas1 = document.getElementById ("canvas1");
            }});
*/

var chartOne = document.getElementById('table1'); 
chartOne.insertAdjacentHTML('beforebegin', '<canvas id="canvas1" height="400" width="1000"></canvas>');


//                      CHART 2
// étape 5.1 CREER LE FICHIER AU BON ENDROIT DANS LE HTML

var chartTwo = document.getElementById('table2'); 
chartTwo.insertAdjacentHTML('beforebegin', '<canvas id="canvas2" height="400" width="1000"></canvas>');


//                COMMUN AUX 2 CHARTS



