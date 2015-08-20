/**
 * Created by corfishy on 15/8/20.
 */
module.exports = {
    name: 'hiddenPluginForPoi' ,// 插件的英文名
    displayName: 'Hidden' , // 插件在界面显示时的名字
    priority: 999, // 插件在菜单里排序的优先级，值越小插件就会显示在越前
    show: true, // 插件是否应该被显示
    realClose: false, // 窗口插件在关闭时是否完全终结进程，默认为否
    author: 'corfishy' ,// 插件作者
    link: 'http://45.78.18.81' ,// 插件作者的链接
    description: 'hide the content of poi' , // 插件基本描述
    version: 'v0.7.3' ,// 插件版本
    reactClass: React.createClass
    ({
        render: function()
        {
            return React.createElement('h1', null, 'It works');
        }
    })// 插件的视图和逻辑，将会渲染进 poi 插件面板里，使用 React.createClass 生成
};

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
        coverElements.setAttribute('src','plugins/hiddenPluginForPoi/defaultCover.jpg')
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