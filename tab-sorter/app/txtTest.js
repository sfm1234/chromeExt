var fso = new ActiveXObject("scripting.FileSystemObject");
var filename = "P:\tab-sorter\app\MyFirstFile.txt";
fso.CreateTextFile(filename);
var file = fso.GetFile(filename);

var streamWrite = file.OpenAsTextStream(); 

streamWrite.WriteLine("YOOO");
streamWrite.Write("YOOO");
streamWrite.Close();