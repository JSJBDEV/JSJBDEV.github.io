

let url = 'https://mtgjson.com/api/v5/AtomicCards.json';
var cards = [];
fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
  cards=out;
})
.catch(err => { throw err });

getFile("_decks.txt");
setTimeout(buildLibrary,1000);



function grabImage()
{
	let x = document.getElementById("gg").value
	console.log(cards.data[x]);
	if(cards.data[x][0].faceName)
	{
		document.getElementById("ff").src="https://magidex.com/extstatic/card/"+cards.data[x][0].printings[0]+"/"+cards.data[x][0].faceName+".jpg"
	}
	else
	{
		document.getElementById("ff").src="https://magidex.com/extstatic/card/"+cards.data[x][0].printings[0]+"/"+cards.data[x][0].name+".jpg"
	}
	
}
var loadedRes = [];
function getFile(url) //using a simple fetch method I can grab my libraries.
{
	fetch(url)
	  .then(function(response) {
		return response.text();
	  }).then(function(text) { 
		if(url.includes("_decks"))
		{
			loadedRes.push(text.split("\n"));
			
		}
		else
		{
			let v = text.split("\n");
			v.unshift(url);
			loadedRes.push(v);
			
		}
		
	});
	
}

function grabImage(x)
{
	
	console.log(cards.data[x]);
	if(cards.data[x][0].faceName)
	{
		document.getElementById("ff").src="https://magidex.com/extstatic/card/"+cards.data[x][0].printings[0]+"/"+cards.data[x][0].faceName+".jpg"
	}
	else
	{
		document.getElementById("ff").src="https://magidex.com/extstatic/card/"+cards.data[x][0].printings[0]+"/"+cards.data[x][0].name+".jpg"
	}
	window.scrollTo({ top: 0, behavior: 'smooth' });
	
}

function buildLibrary()
{
	for(let deck in loadedRes[0])
	{
		getFile(loadedRes[0][deck]+".txt");
	}
	setTimeout(buildTable,1000);
}


function buildTable()
{
	loadedRes.shift();
	var v = document.getElementById("table");
	var t = "<th>database</th><th>amount</th><th>name</th><th>printing</th><th>location</th><th>desc</th>";
	var set = "";
	for( let deckID in loadedRes)
	{
		for(let cardID in loadedRes[deckID])
		{
			if(cardID==0)
			{
				set = loadedRes[deckID][cardID];
			}
			else
			{
				if(set=="storage.txt")
				{
					let split = loadedRes[deckID][cardID].split("=");
					let name = split[split.length-1].replace("\r","");
					let desc = "";
					console.log(name);
					try
					{
						desc = cards.data[name][0].text;
					}
					catch(err){}
					t+="<tr><td>"+set+"</td><td>(unknown)</td><td>"+makeButtonOfSelf(name)+"</td><td>"+split[1]+"</td><td>"+split[0]+"</td><td>"+desc+"</td></tr>"
				}
				else
				{
					let split = loadedRes[deckID][cardID].split(" ");
					let name = split.slice(1,split.length).join(" ");
					
					let desc = "";
					try
					{
						desc = cards.data[name][0].text;
					}
					catch(err){}
					t+="<tr><td>"+set+"</td><td>"+split[0]+"</td><td>"+makeButtonOfSelf(name)+"</td><td>printing (unknown)</td><td>location (in edh deck)</td><td>"+desc+"</td></tr>"
				}
				
			}
		}
	}
	v.innerHTML=t;
	
	
	
	function makeButtonOfSelf(x)
	{
		
		return "<button onclick='grabImage("+'"'+x.replace("\r","")+'"'+")'>"+x.replace("\r","")+"</button>";
	}
}


