export function SVG(iconName:string,iconPath?:string,attributes?:string):string {
    let name = ["success","error","warning","info",'close-modal'];
    let content = "";
    if(undefined !== iconName && name.indexOf(iconName)>=0){
        content = `<svg ${attributes}><use xlink:href="${iconPath}#${iconName}" id="flash-close-button"></use></svg>`
    }else{
        content = iconName;
    }
    return content;
}
