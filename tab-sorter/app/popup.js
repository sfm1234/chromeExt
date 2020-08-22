


//$("#save-btn").click(function() {
//  var blob = new Blob(["test text"], {type: "text/plain;charset=utf-8"});
//  saveAs(blob, "testfile1.txt");
// });


function getTabs(){

//var userInput = document.getElementById("myText").value;

chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) =>{

	  for (let i = 0; i < tabs.length; i++) {
	    var list = tabs[i].url;
	  }


});

  var blob = new Blob([list], { type: "text/plain;charset=utf-8" });
            saveAs(blob, "dynamic.txt");

// chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {

//   for (let i = 0; i < tabs.length; i++) {
//     document.write(`<li>${tabs[i].url}</li>`);
//   }
//   document.write('</ul>');

// });





}


document.getElementById('saveUrls').addEventListener('click', getTabs);

