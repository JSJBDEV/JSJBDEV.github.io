fileStore = [];
function getFile(url) //using a simple fetch method I can grab my libraries.
{
	fetch(url)
  .then(function(response) {
    return response.text();
  }).then(function(text) { 
	fileStore = text.split("\n");
	return fileStore;
});
}

function loadRuns()
{
	document.getElementById("context").innerHTML = "Results:";
	fileStore.forEach(slowparse);
}
//`Id`, `Player`, `Map`, `Temps`, `Categorie`, `Lien`, `Date`, `Informations`, `Type`, `Verif`, `TAS`
var verifiers = ["no","Yes (pre 2020)","Yes"];
var general = ["no","yes"];
var isFull = false;
function goparse(current,part,searchterm)
{
	current = current.replace(/\\n/g,"").replace(/\\r/g," ");
	var run = current.split(",");
	console.log(searchterm);
	console.log(run[1]);
	if(run.includes(searchterm))
	{
		document.getElementById("context").innerHTML += "<p>Old Run ID: "+run[0] + "<br>";
		document.getElementById("context").innerHTML += "Runner: "+run[1] + "<br>";
		document.getElementById("context").innerHTML += "Map Name: "+run[2] + "<br>";
		document.getElementById("context").innerHTML += "Time: "+run[3] + "<br>";
		document.getElementById("context").innerHTML += "Run Category: "+run[4] + "<br>";
		document.getElementById("context").innerHTML += "Video Link: <a href='"+run[5] + "'>Link</a><br>";
		document.getElementById("context").innerHTML += "Date Completed: "+run[6] + "<br>";
		document.getElementById("context").innerHTML += "Map Category: "+run[run.length-4] + "<br>";
		document.getElementById("context").innerHTML += "Verified by Mod: "+verifiers[parseInt(run[run.length-3])] + "<br>";
		if(isFull){
			document.getElementById("context").innerHTML += "Is Tool Assisted?: "+general[parseInt(run[run.length-2])] + "<br><br></p>";
			
			var desc = run.slice(7,run.length-4);
			document.getElementById("context").innerHTML += "Player Notes: "+desc + "<br><br>---<br>";
		}
		console.log(run);
	}
	
}
function slowparse(current)
{
	setTimeout(goparse,10,current,document.getElementById("mapcat").value,document.getElementById("term").value);
}
var LOCAL_ID = 1;
function idparse(current)
{
	setTimeout(goparse,10,current,2,LOCAL_ID);
}
var generated = [];
function constructList(current)
{
	current = current.replace(/\\n/g,"").replace(/\\r/g," ");
	var run = current.split(",");
	if(!generated.includes("<button onclick='getRunsFromName("+'"'+run[2]+'"'+")'>"+run[run.length-4]+" "+run[2]+"</button><br>"))
	{
		generated.push("<button onclick='getRunsFromName("+'"'+run[2]+'"'+")'>"+run[run.length-4]+" "+run[2]+"</button><br>");
	}
		
	generated.sort();
	
}
function getRunsFromName(ide)
{
	LOCAL_ID = ide;
	document.getElementById("context").innerHTML = "Results:<br>";
	fileStore.forEach(idparse);
}

function allMaps()
{
	document.getElementById("context").innerHTML = "==ALL MAPS==<br>";
	fileStore.forEach(constructList);
	document.getElementById("context").innerHTML += generated;
}


getFile("all.txt");
