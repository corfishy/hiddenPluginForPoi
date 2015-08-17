function hotkey()
{
if(event.ctrlKey)
{
	hideDisplay('needToHide')
}
else if(event.shiftKey)
{
	if (imgCount==0)
	{
		imgCount = imgCount+1
		coverByImage()
	}
	else
	{
		imgCount = imgCount-1
		uncoverByImage()
	}
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
function coverByImage()
{
	var coverElements=document.createElement("img")
	coverElements.setAttribute('src','plugins/hide/defaultCover.jpg')
	coverElements.setAttribute('id','coverImage')
	coverElements.style.position="absolute"
	coverElements.style.top="0px"
	coverElements.style.left="0px"
	coverElements.style.zIndex="999"
	var toInsert = document.getElementById("needToHide")
	toInsert.appendChild(coverElements)
}
function uncoverByImage()
{
	var toUncoverImage=document.getElementById("coverImage")
	var parentOfImage=document.getElementById("needToHide")
	parentOfImage.removeChild(toUncoverImage)
}


var htmlArray = new Array()
var imgCount = 0
htmlArray = document.getElementsByTagName("html")
htmlArray[0].setAttribute("id","needToHide")
document.onkeydown = hotkey;