function hotkey()
{
var a=window.event.keyCode;
if(event.ctrlKey)
{
display('need')
}
}
function display(y)
{
	$(y).style.display=($(y).style.display=="none")?"":"none";
}
function $(s)
{
	return document.getElementById(s);
}
document.getElementsByTagName("html")[0].setAttribute("id","need");
document.onkeydown = hotkey;