function list_session(callback) {

    chrome.windows.getAll({populate : true}, function (window_list) {
        var list = [];
        for(var i=0;i<window_list.length;i++) {
            list = list.concat(window_list[i].tabs);
        }
        console.log(list);
        if(callback) {
            callback(list);
        }
    });
}




var ConsoleDebug = document.getElementById("ConsoleDebug");

ConsoleDebug.addEventListener("click", function writeToConsole(){console.log("hello")});