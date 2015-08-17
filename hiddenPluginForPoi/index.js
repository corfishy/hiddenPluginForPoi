function hotkey()
{
if(event.ctrlKey)
{
hideDisplay('needToHide')
}
}
function hideDisplay(y)
{
	getElementToHide(y).style.display=(getElementToHide(y).style.display=="none")?"":"none"
}
function getElementToHide(idOfHide)
{
	return document.getElementById(idOfHide)
}
document.getElementsByTagName("html")[0].setAttribute("id","needToHide")
document.onkeydown = hotkey;