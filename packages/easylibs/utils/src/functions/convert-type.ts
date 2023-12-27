export function textHtmlToNode(textHtml:string, targetName="div", children:boolean = false):Element|HTMLCollection|null
{
  const target = document.createElement(`${targetName}`);
  target.innerHTML = textHtml;
  if(true === children){return target.children;}
  return target.firstElementChild
}
  