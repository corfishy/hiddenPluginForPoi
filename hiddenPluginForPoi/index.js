function hotkey()
{
if(event.ctrlKey)
{
hideDisplay('needToHide')
}
}
function hideDisplay(toHide)
{
	if (getElementToHide(toHide).style.display=="none")
	{
		getElementToHide(toHide).style.display=""
	}
	else
	{
		getElementToHide(toHide).style.display="none"
	}
}
function getElementToHide(idOfHide)
{
	return document.getElementById(idOfHide)
}
var htmlArray = new Array()
htmlArray = document.getElementsByTagName("html")
htmlArray[0].setAttribute("id","needToHide")
document.onkeydown = hotkey;