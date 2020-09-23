/**
 * PROCURAR SABER COMO INTERLIGAR AS AÇÕES DAQUI COM O SCRIPT DE PÁGINA DO OUTLOOK
 */

// var storage = localStorage.getItem("blockAdsOutlook");

// if (storage == null) {
    
//     document.getElementById("switch-label").appendChild(
//         document.write(
//             '<label class="switch">'
//             + '<input id="switchClick" type="checkbox">'
//             + '<span class="slider round"></span>'
//             + '</label>'
//         )
//     );   
    
//     var switchClick = document.getElementById('switchClick');
//     switchClick.onclick = function() {
//         let storage = localStorage.getItem("blockAdsOutlook");
//         if (storage == true) {
//             localStorage.removeItem("blockAdsOutlook");      
//         }
//         else {
//             localStorage.setItem("blockAdsOutlook", true);
//         }
//     };
// }
// else {
//     document.getElementById("switch-label").appendChild(
//         document.write(
//             '<label class="switch">'
//             + '<input id="switchClick" type="checkbox" checked>'
//             + '<span class="slider round"></span>'
//             + '</label>'
//         )
//     ); 
//     var switchClick = document.getElementById('switchClick');
//     switchClick.onclick = function() {
//         let storage = localStorage.getItem("blockAdsOutlook");
//         if (storage == true) {
//             localStorage.removeItem("blockAdsOutlook");      
//         }
//         else {
//             localStorage.setItem("blockAdsOutlook", true);
//         }
//     };
// }