// function list_session(callback) {

//     chrome.windows.getAll({populate : true}, function (window_list) {
//         var list = [];
//         for(var i=0;i<window_list.length;i++) {
//             list = list.concat(window_list[i].tabs);
//         }
//         console.log(list);
//         if(callback) {
//             callback(list);
//         }
//     });
// }


//put code in here to run after DOM has loaded
// window.onload=function(){
// }




document.getElementById("ConsoleDebug").addEventListener('click', myFunction);






function myFunction() {
  var text = ["I", "hear", "you"];
  var text2 = ["I", "see", "sea"];

  for (let i=0; i<20; i++){
    
    text.push(text[i]);
    text2.push(text2[i]);
  }
    
    var text3 = text.concat(text, text2);

    document.getElementById("demo").innerHTML = text3;

  console.log(text3);
}

















