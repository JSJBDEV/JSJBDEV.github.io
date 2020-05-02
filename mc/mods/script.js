
var QUEST_COUNTER = 0;
var QUEST_LIST = [];
var CON_COUNTER = 0;
var CON_LIST = [];
var GRID_LIST = ["intro"];

function addQuestContainer()
{
	document.getElementById("Quests").insertAdjacentHTML("afterend","<br>"+
	"<div id=q"+QUEST_COUNTER+" name='quest' class='row'>q"+
	QUEST_COUNTER+
	"<textarea id='name' name='name' rows=1>name</textarea>"+
	"<textarea id='description' name='description' rows=1>description</textarea>"+
	
	"<select id='condition'>"+
			  "<option value='has'>Has Item</option>"+
			  "<option value='take'>Take Item</option>"+
			  "<option value='score'>Has Score Value</option>"+
			  "<option value='tag'>Has Scoreboard Tag</option>"+
			  "</select>"+
	"<textarea id='arguments' name='arguments' rows=1>arguments</textarea>"+
	"<textarea id='icon' name='icon' rows=1>icon texture location</textarea>"+
	"<textarea id='hover' name='hover' rows=1>hover text</textarea>"+
	"<textarea id='require' name='require' rows=1>required quests</textarea>"+
	"<textarea id='category' name='category' rows=1>category</textarea>"+
	"</div>");
	QUEST_LIST.push("q"+QUEST_COUNTER);
	QUEST_COUNTER++;
	generateGrid();
	
	
			  
}

function addConnectorContainer()
{
	document.getElementById("Quests").insertAdjacentHTML("afterend","<br>"+
	"<div id=c"+CON_COUNTER+" name='quest' class='row'>c"+
	CON_COUNTER+
	
	"<select id='icon'>"+
	"<option value='cquestweaver:textures/gui/arrows/vertical.png'>vertical</option>"+
	"<option value='cquestweaver:textures/gui/arrows/horizontal.png'>horizontal</option>"+
	"<option value='cquestweaver:textures/gui/arrows/right-up.png'>right/up</option>"+
	"<option value='cquestweaver:textures/gui/arrows/left-up.png'>left/up</option>"+
	"<option value='cquestweaver:textures/gui/arrows/right-down.png'>right/down</option>"+
	"<option value='cquestweaver:textures/gui/arrows/left-down.png'>left/down</option>"+
	"</select>"+
	
	
	
	"<textarea id='require' name='require' rows=1>required quests</textarea>"+
	"<textarea id='category' name='category' rows=1>category</textarea>"+
	"</div>");
	CON_LIST.push("c"+CON_COUNTER);
	CON_COUNTER++;
	generateGrid();
	
	
			  
}
function generateGrid()
{
	var builder="";
	var allex = listToText(QUEST_LIST);
	var allcx = listToText(CON_LIST);
	for(grids = 0; grids<GRID_LIST.length; grids++)
	{
		builder+=GRID_LIST[grids]+"<div id="+GRID_LIST[grids]+">";
		for (j = 0; j < 5; j++) 
		{
			for (i = 0; i < 10; i++) 
			{
				builder+="<select id='"+i+";;"+j+"' name='box'>"+
			  "<option value='nil'>nil</option>"+
			  allex+
			  allcx+ 
			  "</select>";
			}
			builder+="<br>";
		}
		builder+="</div><br>";
	}
	
	document.getElementById("GridContainer").innerHTML=builder;
}

function listToText(input)
{
	var builder = "";
	for (i = 0; i < input.length; i++) 
	{
		builder+="<option value='"+input[i]+"'>"+input[i]+"</option>";
	}
	return builder;
}

function generateQuestFile()
{
	var builder="";
	var quests = document.getElementsByName("quest");
	var boxes = document.getElementsByName("box");
	for(i = 0; i<boxes.length; i++)
	{
		var entry = document.getElementById(boxes[i].value);
		if(boxes[i].value.startsWith("q"))
		{
			builder+=entry.children[0].value+";;"
			+entry.children[1].value+";;"
			+entry.children[2].value+";;"
			+entry.children[3].value+";;"
			+entry.children[4].value+";;"
			+entry.children[5].value+";;"
			+boxes[i].id+";;"
			+entry.children[6].value+";;"
			+boxes[i].parentElement.id+"\n";
		}
		if(boxes[i].value.startsWith("c"))
		{
			builder+="!"
			+entry.children[0].value.substring(1)+";;"
			+boxes[i].id+";;"
			+entry.children[1].value+";;"
			+boxes[i].parentElement.id+"\n";
			
		}
		
	}
	document.getElementById("output").innerHTML=builder;
}

function genNewGrid()
{
	GRID_LIST.push(document.getElementById("newgridname").value);
	generateGrid();
}

addQuestContainer();