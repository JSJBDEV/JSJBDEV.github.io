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
var bigArray = [];
function loadRuns()
{
	bigArray = [];
	document.getElementById("context").innerHTML = "";
	fileStore.forEach(slowparse);
}
//`Id`, `Player`, `Map`, `Temps`, `Categorie`, `Lien`, `Date`, `Informations`, `Type`, `Verif`, `TAS`
var verifiers = ["no","Yes (pre 2020)","Yes"];
var general = ["no","yes"];
var isFull = false;
var useChinese = false;

function goparse(current,part,searchterm)
{
	current = current.replace(/\\n/g,"").replace(/\\r/g," ");
	var run = current.split(",");
	if(run[part]==undefined)
	{
		run[part]="[data lost]";
	}
	if(run[part].startsWith(" "))
	{
		run[part]=run[part].slice(1);
	}
	if(searchterm.startsWith(" "))
	{
		searchterm=searchterm.slice(1);
	}
	if(run.includes(searchterm) || run[part].toLowerCase().includes(searchterm.toLowerCase()))
	{
		var builder = "";
		builder += "<p hidden>Sorting time"+run[3] + "</p>";
		builder += "<button class='w3-"+document.getElementById("parts").value+" w3-round-xlarge w3-card w3-"+getCatColour(run[4])+" w3-button' onclick='openmodal("+run[0]+")'>Map Name: "+run[2] + "<br>";
		builder += "Time: "+run[3] + "<br>";
		builder += "Run Category: "+run[4] + "<br>";
		builder += "Runner: "+run[1] + "<br>";
		builder += "<a href='"+run[5] + "'>"+run[5]+"</a><br>";
		builder += "Date Completed: "+run[6] + "<br>";
		if(isFull){
			builder += "Map Category: "+run[run.length-4] + "<br>";
			builder += "Verified by Mod: "+verifiers[parseInt(run[run.length-3])] + "<br>";
			builder += "Is Tool Assisted?: "+general[parseInt(run[run.length-2])] + "<br><br>";
			var desc = run.slice(7,run.length-4);
			builder += "Player Notes: "+desc + "<br><br><br>";
		}
		builder += "Old Run ID: "+run[0] + "<br>";
		bigArray.push(builder);
		bigArray.sort();
		document.getElementById("context").innerHTML = bigArray;
	}
	
}
var CLICKED_ID = 0;
function openmodal(passid)
{
	CLICKED_ID=passid;
	fileStore.forEach(makemodal);
}
function getCatColour(inp)
{
	if(inp.includes("TAS"))
	{
		return "red";
	}
	else if(inp.includes("Glitchless"))
	{
		return "green";
	}
	else if(inp.includes("100%"))
	{
		return "pink";
	}
	
	return "white";
}


function makemodal(current)
{
	current = current.replace(/\\n/g,"").replace(/\\r/g," ");
	var run = current.split(",");
	if(run[0]==undefined)
	{
		run[0]=0;
	}
	if(run[0]==CLICKED_ID)
	{
		var builder = "";
		
		builder += "<div id='genmodal' class='w3-modal'><div class='w3-modal-content w3-animate-top w3-card-4'>Map Name: "+run[2] + "<br>";
		builder += "Time: "+run[3] + "<br>";
		builder += "Run Category: "+run[4] + "<br>";
		builder += "Runner: "+run[1] + "<br>";
		builder += "Date Completed: "+run[6] + "<br>";
		builder += "Map Category: "+run[run.length-4] + "<br>";
		builder += "Verified by Mod: "+verifiers[parseInt(run[run.length-3])] + "<br>";
		builder += "Is Tool Assisted?: "+general[parseInt(run[run.length-2])] + "<br><br>";
		
		builder += "Old Run ID: "+run[0]+"<br><span onclick='closemodal()' class='w3-button w3-display-topright'>&times;</span>";
		builder += getiframe(run[5])+"<br>";
		var desc = run.slice(7,run.length-4);
		builder += "Player Notes: "+desc + "<br><br><br></div></div>";
		document.getElementById("modalloc").innerHTML = builder;
		document.getElementById("genmodal").style.display="block";
	}
	
}
function closemodal()
{
	document.getElementById("modalloc").innerHTML = "";
}
function getiframe(linkto)
{
	var getid="";
	if(linkto.includes("youtu.be"))
	{
		var vidid=linkto.split("/");
		getid=vidid[vidid.length-1];
		return "<iframe width='560' height='315' src='https://www.youtube.com/embed/"+getid+"' frameborder='0' allowfullscreen></iframe>";
	}
	if(linkto.includes("youtube"))
	{
		var vidid=linkto.split("=");
		getid=vidid[vidid.length-1];
		return "<iframe width='560' height='315' src='https://www.youtube.com/embed/"+getid+"' frameborder='0' allowfullscreen></iframe>";
	}
	if(linkto.includes("twitch"))
	{
		var vidid=linkto.split("/");
		getid=vidid[vidid.length-1];
		return "<iframe width='560' height='315' src='https://player.twitch.tv/?video=v"+getid+"' frameborder='0' allowfullscreen='true'></iframe>"
	}
	return "<a href='"+linkto + "'>"+linkto+"</a>";
	
}




function slowparse(current)
{
	setTimeout(goparse,10,current,document.getElementById("mapcat").value,document.getElementById("term").value);
}
var LOCAL_ID = "";
function idparse(current)
{
	setTimeout(goparse,100,current,"2",LOCAL_ID);
}
function idAsModal(idf)
{
	setTimeout(goparse,10,current,document.getElementById("mapcat").value,document.getElementById("term").value);
}
var generated = [];
function constructList(current)
{
	document.getElementById("context").innerHTML = "";
	current = current.replace(/\\n/g,"").replace(/\\r/g," ");
	var run = current.split(",");
	if(!generated.includes("<div class='w3-third'><button onclick='getRunsFromName("+'"'+run[2]+'"'+")' class='w3-btn w3-red w3-margin w3-card'><h2>"+run[2]+"</h2></button></div>"))
	{
		generated.push("<div class='w3-third'><button onclick='getRunsFromName("+'"'+run[2]+'"'+")' class='w3-btn w3-red w3-margin w3-card'><h2>"+run[2]+"</h2></button></div>");
	}
		
	generated.sort();
	
}
function getRunsFromName(ide)
{
	bigArray = [];
	LOCAL_ID = ide;
	document.getElementById("context").innerHTML = "";
	fileStore.forEach(idparse);
}

function allMaps()
{
	bigArray = [];
	document.getElementById("context").innerHTML = "";
	fileStore.forEach(constructList);
	document.getElementById("context").innerHTML += generated.toString().replace(/,/g,"");
}
function submitRun()
{
	document.getElementById("context").innerHTML = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf3ou2aCYpccMnwszposZhDJ1IGxk2DzGTOSWGDAaURwPnfLQ/viewform?embedded=true" width="100%" height="3000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
}
function submitRequest()
{
	document.getElementById("context").innerHTML = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScYvKDvg7qGwb5n_voDy6ms5IaBWO0WMZ9fe-j0d1_kRkrkig/viewform?embedded=true" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
}
function sinfo()
{
	document.getElementById("context").innerHTML = "<div class='w3-card w3-yellow w3-mobile'><p>This website was desinged in mid 2020 during a pandemic outbreak, it is built on a database that was from 2018 supplied by a fellow speedrunner of mine who had previously maintained minecraftruns.ml, as seen <a href='https://web.archive.org/web/20180109223820/http://minecraftruns.ml/'>here on the wayback machine</a> this website was generally abbandoned in late 2018 and I was then sent the database, 2 years later I have finally set up this site to provide a place to submit Tool Assisted Speedruns and normal speedruns of minecraft custom maps and 'Complete the monument' maps, I hope you find this a useful resource and as such it encourages you to pursue speedrunning :)</p><p>To submit a run simlpy click the 'Submit A Run!' button and fill out the form, you can also click 'Submit A Request!' to submit a correction, a map description or strategy, or your personal links when someone searches for you</p><p>If you want to talk to someone about speedrunning or TASing you can find the discord links to those servers here: <br><a href='https://discord.gg/jGhNxpd'>TAS Minecraft Discord</a><br><a href=' https://discord.gg/jGhNxpd'>Minecraft Speedrunning Discord</a></p></div>";
}


getFile("fix.txt");

