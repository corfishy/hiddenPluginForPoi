/**
 * Created by corfishy on 15/8/20.
 */
module.exports = {
    name: "hiddenPluginForPoi" // 插件的英文名
    displayName: "Hidden" | ReactElement // 插件在界面显示时的名字
    priority: 999 // 插件在菜单里排序的优先级，值越小插件就会显示在越前
    show: true // 插件是否应该被显示
    realClose: false // 窗口插件在关闭时是否完全终结进程，默认为否
    author: "corfishy" | ReactElement // 插件作者
    link: "http://45.78.18.81" // 插件作者的链接
    description: "hide the content of poi" | ReactElement // 插件基本描述
    version: "v0.7.3" | ReactElement // 插件版本
    reactClass: ReactClass // 插件的视图和逻辑，将会渲染进 poi 插件面板里，使用 React.createClass 生成
};