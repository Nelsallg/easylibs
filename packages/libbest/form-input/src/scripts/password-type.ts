import { processNodes } from "../../../utils/src/functions/process-node";
import { textHtmlToNode } from "../../../utils/src/functions/convert-type";
import { findComputedStyle } from "../../../utils/src/functions/utils";

export class PasswordVisibility{
    private iconPath: { hide: string; show: string; };
    private showIconsToClick: boolean;
   
    constructor(iconPath:{hide:string,show:string},showIconsToClick:boolean = false){
        this.iconPath = iconPath;
        this.showIconsToClick = showIconsToClick;
    }
    public active = () => {
        const fieldContainer = document.querySelectorAll("password");
        processNodes(fieldContainer, (container:HTMLElement) => {
            container.setAttribute('pws-target','');
            const field = container.querySelector("input[type='password']") as HTMLInputElement;
            const html = this.html();
            container.appendChild(html);
            const iconHide = container.querySelector(".hide-eye") as HTMLElement;
            const iconShow = container.querySelector(".show-eye") as HTMLElement;
            const fieldBorderRadius = findComputedStyle(field, "border-radius");
            if("" !== fieldBorderRadius){
                container.style.borderTopRightRadius = fieldBorderRadius;
                container.style.borderBottomRightRadius = fieldBorderRadius;
            }
            if(this.showIconsToClick){
                field.addEventListener("click", () =>{
                    html.style.display = 'flex';
                })
            }else{html.style.display = 'flex';}
            iconShow.addEventListener('click', ()=>{
                if(field.type === 'password'){
                    field.type = "text";
                    field.style.paddingRight = "35px";
                    iconShow.style.display = 'none';
                    iconHide.style.display = 'flex';
                }
            })
            iconHide.addEventListener('click', ()=>{
                if(field.type === 'text'){
                    field.type = "password";
                    iconShow.style.display = 'flex';
                    iconHide.style.display = 'none';
                }
            })
        })
    }

    private html(): HTMLElement
    {
        const html = `<div class='eyes-icon'>
            <svg class="hide-eye" style='display:none;'><use xlink:href="/${this.iconPath.hide}"></use></svg>
            <svg class="show-eye"><use xlink:href="/${this.iconPath.show}"></use></svg>
        </div>`;
        const htmlstyle = {
            display: 'none',
            position: 'absolute',
            top: '0',
            right: '0',
            height: '100%',
            width: '35px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d5e3ec'
        }
        let node = textHtmlToNode(html,"div") as HTMLElement;
        Object.assign(node.style, htmlstyle);
        return this.iconStyle(node) as HTMLElement;
    }
    private iconStyle(html:HTMLElement): HTMLElement
    {
        let svg = html.querySelectorAll('svg');
        html.innerHTML = "";
        processNodes(svg, (iconSvg:SVGSVGElement) => {
            const style = {
                color: '#999',
                cursor: 'pointer',
                width: '1.5rem',
                height: '1.5rem',
            }
            Object.assign(iconSvg.style, style);
            html.appendChild(iconSvg);
        })
        return html;
    }
}