var title = document.getElementById('title');
var png = document.getElementById('png');
var heading = document.getElementById('heading');
var paragraph = document.getElementById('paragraph');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var key = false;
var keyImage = document.getElementById("key");
var dsclmr = document.getElementById('Disclaimer');
var tired = true;
var schroevendraaier = false;
var payed = false;
var money = document.getElementById('money');
var euros = 0;

function getKey()
{
	key = true;
	keyImage.parentNode.removeChild(keyImage);
	console.log(key);
}

function nextPage()
{
	console.log(euros)
	console.log(key);
	if (key == true) {
		title.innerHTML = "Eerste probleem";
		png.src = "stap 1.png";
		heading.innerHTML = "Eerste Probleem.";
		paragraph.innerHTML = "Oh nee u bent ontslagen en u heeft geld problemen! Wat doet u nu?";
		b1.innerHTML = "U gaat werk zoeken";
		b2.innerHTML = "U gaat ergens inbreken om geld te stelen";
		b3.innerHTML = "U gaat een YouTube kanaal beginnen";
		b1.onclick = werkZoeken;
		b2.onclick = inBreken;
		if (payed == true) {
			b3.onclick = betalen;
			money.style.display = "inline";
		}
		else {
			b3.onclick = YouTubeStarten;
		}
		b2.style.display = "inline";
		b3.style.display = "inline";
	}
	else {
		window.alert("U heeft een sleutel nodig om door te gaan!");
		console.log("You need a key to pass!");
	}
	dsclmr.innerHTML = "Disclaimer: I don't reccomend you do this in real life."
}

function werkZoeken()
{
	title.innerHTML = "Werk  zoeken";
	png.src = "stap 2.png";
	heading.innerHTML = "Goed Gedaan!.";
	paragraph.innerHTML = "Goed zo u heeft de juiste keuze gemaakt!";
	b1.innerHTML = "Volgende";
	b1.onclick = Volgende;
	b2.style.display = "none";
	b3.style.display = "none";
	money.style.display = "inline";
}

function inBreken()
{
	title.innerHTML = "Wat nu?";
	png.src = "watnu.png";
	heading.innerHTML = "Keuzes";
	paragraph.innerHTML = "Nu u besloten heeft om een crimineel te worden, zult u keuzes moeten maken, zoals waar en hoe... Maar in gebrek van tijd heb ik voor u al besloten waar. Hoe en wat u nu gaat doen mag u zelf uitvogelen.";
	b1.innerHTML = "Naar uw huis gaan.";
	b2.innerHTML = "Naar het huis dat u gaat in breken (van een rijke man)";
	b1.onclick = naarHuis;
	b2.onclick = naarTarget;
	b3.style.display = "none";
	money.style.display = "inline";
}

function YouTubeStarten()
{
	title.innerHTML = "YouTube DLC";
	png.src = "YouTube.png";
	heading.innerHTML= "YouTube.";
	paragraph.innerHTML = "Koop nu de YouTube DLC! Voor u heb ik, tegen advies in, korting geregeld! Met deze DLC kunt u een YouTube account maken en dan, door de juiste keuzes te maken, heel rijk worden! Koop het nu!";
	b1.innerHTML = "€14,99 (normaal €19,99)!";
	b2.innerHTML = "Terug.";
	b1.onclick = betalen;
	b2.onclick = nextPage;
	b3.style.display = "none";
	dsclmr.innerHTML = "Disclaimer: I don't reccomend you do this in real life. The DLC is yet to come out so it is pre-order.";

}

function Volgende()
{
	png.src = "stap 2.png";
	heading.innerHTML = "maar...";
	paragraph.innerHTML = "Ook al zou ik uw keuze goed keuren, het spel heet Break-In dus u heeft helaas de verkeerde keuze gemaakt.";
	b1.innerHTML = "Probeer het nog een keer.";
	b1.onclick = nextPage;
}

function betalen()
{
	payed = true;
	title.innerHTML = "betaald";
	png.src = "youTube.png";
	heading.innerHTML = "Dank u wel.";
	paragraph.innerHTML = "Bedankt voor het kopen van de YouTube DLC, u zult een mailtje krijgen wanneer hij uitkomt. De verwachte datum van publicatie is 13/13/2018";
	b1.innerHTML = "Terug";
	b1.onclick = nextPage;
	b2.style.display = "none";
	b3.style.display = "none";
}

function naarHuis()
{
	console.log(tired);
	console.log(schroevendraaier);
	b1.style.display = "none";
	b2.style.display = "inline";
	b3.style.display = "inline";
	if (euros == 10) {
		b1.style.display = "inline";
	}
	if (schroevendraaier == false) {
		b1.innerHTML = "Pak uw schroevendraaier.";
		b1.onclick = sdPakken;	
	}
	else {
		b1.style.display = "none";
	}
	if (tired == true) {
		b3.innerHTML = "Ga naar bed.";
		b3.onclick = slapen;
	}
	else {
		b2.style.display = "inline";
		b3.style.display = "none";
	}
	title.innerHTML = "Thuis";
	png.src = "thuis.png";
	heading.innerHTML = "Thuis.";
	paragraph.innerHTML = "U bent thuis maar wat gaat u nu doen?";
	b2.innerHTML = "Ga naar het huis dat u wilt inbreken";
	b2.onclick = naarTarget;
		

}

function naarTarget()
{
	console.log(schroevendraaier);
	title.innerHTML = "belangerijke keuze"; 
	png.src = "huis2.png";
	heading.innerHTML = "U bent er bijna.";
	paragraph.innerHTML = "Nu moet u een belangerijke keuze maken.. als het fout gaat is geld het laatste van uw problemen..";
	if (schroevendraaier == true && tired == false) {
		b1.innerHTML = "Probeer het raam open te maken met uw schroevendraaier.";
		b1.onclick = complete;
		b1.style.display = "inline";
		b2.innerHTML = "Probeer de deur open te maken met uw schroevendraaier."
		b2.onclick = faal1;
		b2.style.display = "inline";
	}
	else if (schroevendraaier == true) {
		b1.innerHTML = "Probeer het raam open te maken met uw schroevendraaier.";
		b1.onclick = faal2;
		b1.style.display = "inline";
		b2.innerHTML = "Probeer de deur open te maken met uw schroevendraaier.";
		b2.onclick = faal1;
		b2.style.display = "inline";
		b3.style.display = "none";
	}
	else {
		b1.innerHTML = "Probeer het raam open te breken.";
		b1.onclick = faal2;
		b2.innerHTML = "Probeer de deur open te breken.";
		b2.onclick = faal1;
		b1.style.display = "inline";
		b2.style.display = "inline";
		b3.style.display = "none";
	}
}

function sdPakken()
{
	schroevendraaier = true;
	title.innerHTML = "schroevendraaier";
	png.src = "schroevendraaier.png";
	heading.innerHTML = "U heeft schroevendraaier";
	paragraph.innerHTML = "Het was goed verstopt maar nu heeft u de schroevendraaier.";
	b1.innerHTML = "Volgende";
	b1.onclick = naarHuis;
	b2.style.display = "none";
	b3.style.display = "none";
}

function slapen()
{
	tired = false;
	title.innerHTML = "Slapen";
	png.src = "slapen.png";
	heading.innerHTML = "zzz";
	paragraph.innerHTML = "Ik moet wel eerlijk zeggen dat u snurkt. Maar ja dat is niet iets waar u zich nu druk om hoeft te maken.";
	b1.innerHTML = "Volgende";
	b1.onclick = naarHuis;
	b1.style.display = "inline";
	b2.style.display = "none";
	b3.style.display = "none";
	money.style.display = "inline";
}

function faal1()
{
	title.innerHTML = "Nieuws!";
	png.src = "krant.png";
	heading.innerHTML = "Iemand probeerde in te breken.";
	if (schroevendraaier == true) {
		paragraph.innerHTML = 'Iemand probeerde laatst in te breken in het huis van ... De inbreker rende weg toen hij werd gezien door de buren. "Hij had iets in zijn handen waarmee hij de deur open probeerde te krijgen." Zei de buurman die het gezien had. Bel de politie wanneer je de inbreker ziet.';
	}
	else {
		paragraph.innerHTML = 'Iemand probeerde laatst in te breken in het huis van ... De inbreker  rende weg toen hij werd gezien door de buren. "Hij probeerde de deur open te breken." Zei de buurman die het gezien had. Bel de politie wanneer je de inbreker ziet.';
	}
	b1.innerHTML = "volgende";
	b1.onclick = lost;
	b2.style.display = "none";
	b3.style.display = "none";
}

function faal2()
{
	title.innerHTML = "Nieuws!";
	png.src = "krant.png";
	heading.innerHTML = "Iemand probeerde in te breken.";
	if (schroevendraaier && tired == true) {
		paragraph.innerHTML = 'Iemand probeerde laatst in te breken in het huis van ... De inbreker rende weg toen hij werd gezien door de buren."Ik hoorde een vreemd geluid en toen ik ging kijken zag een man met iets in zijn hand een raam proberen open te breken. Toen ik hem vroeg wat hij aan het doen was rende hij weg." Zei de buurman die het gezien had. Bel de politie wanneer je de inbreker ziet.';
	}
	else {
		paragraph = 'Iemand probeerde laatst in te breken in het huis van ... De inbreker rende weg toen hij werd gezien door de buren."Ik hoorde een vreemd geluid en toen ik ging kijken zag een man die het raam probeerde te breken, toen ik hem vroeg wat hij aan het doen was rende hij weg." Zei de buurman die het gezien had. Bel de politie wanneer je de inbreker ziet.';
	}
	b1.innerHTML = "volgende";
	b1.onclick = lost;
	b2.style.display = "none";
	b3.style.display = "none";
}

function complete()
{
	title.innerHTML = "Nieuws!";
	png.src = "krant.png";
	heading.innerHTML = "Ingebroken!";
	paragraph.innerHTML = 'Er was laatst ingebroken bij ...."Er is wat geld gestolen, niet zo veel maar 3000 euro ofzo." Zei .... Als u misschien iets heeft gezien bel alstublieft de politie.';
	b1.innerHTML = "volgende";
	b1.onclick = won;
	b2.style.display = "none";
	b3.style.display = "none";
}

function lost()
{
	title.innerHTML = "Verloren";
	png.src = "verloren.png";
	heading.innerHTML = "Verloren";
	paragraph.innerHTML = "U heeft verloren. Herlaad de pagina om het nog een keer te proberen.";
	b1.style.display = "none";
}

function won()
{
	title.innerHTML = "Gewonnen";
	png.src = "gewonnen.png";
	heading.innerHTML = "Gewonnen";
	paragraph.innerHTML = "Gefeliciteerd u heeft gewonnen.. Maar eigenlijk niet echt want u bent nu een crimineel.";
	b1.style.display = "none";
}

function getMoney()
{
	money.style.display = "none";
	euros += 2;
	console.log(euros);
}