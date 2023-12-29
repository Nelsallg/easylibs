import Utils from "@easylibs/utils";

export default class PasswordManager{
    constructor(iconPath: { hide: string; show: string }, showIconsToClick: boolean = false){
        new PasswordVisibility(iconPath,showIconsToClick)
    }
}

/**
 * Manages the visibility of password fields, allowing users to toggle between password and text visibility.
 */
class PasswordVisibility {
    private iconPath: { hide: string; show: string };
    private showIconsToClick: boolean;

    /**
     * Constructs a new PasswordVisibility instance.
     * @param {Object} iconPath - The paths for hide and show icons.
     * @param {string} iconPath.hide - The path for the hide icon.
     * @param {string} iconPath.show - The path for the show icon.
     * @param {boolean} [showIconsToClick=false] - Indicates whether to show icons on click or by default.
     */
    constructor(iconPath: { hide: string; show: string }, showIconsToClick: boolean = false) {
        this.iconPath = iconPath;
        this.showIconsToClick = showIconsToClick;
    }

    /**
     * Activates the password visibility functionality for all password fields within the document.
     */
    public activate = () => {
        const fieldContainers = document.querySelectorAll("[password]");
        Utils.processNodes(fieldContainers, (container: HTMLElement) => {
            container.setAttribute('pws-target', '');

            const field = container.querySelector("input[type='password']") as HTMLInputElement;
            const html = this.createHtml();
            container.appendChild(html);

            const iconHide = container.querySelector(".hide-eye") as HTMLElement;
            const iconShow = container.querySelector(".show-eye") as HTMLElement;

            const fieldBorderRadius = Utils.findComputedStyle(field, "border-radius");
            if (fieldBorderRadius !== "") {
                container.style.borderTopRightRadius = fieldBorderRadius;
                container.style.borderBottomRightRadius = fieldBorderRadius;
            }

            if (this.showIconsToClick) {
                field.addEventListener("click", () => {
                    html.style.display = 'flex';
                });
            } else {
                html.style.display = 'flex';
            }

            iconShow.addEventListener('click', () => {
                if (field.type === 'password') {
                    field.type = "text";
                    field.style.paddingRight = "35px";
                    iconShow.style.display = 'none';
                    iconHide.style.display = 'flex';
                }
            });

            iconHide.addEventListener('click', () => {
                if (field.type === 'text') {
                    field.type = "password";
                    iconShow.style.display = 'flex';
                    iconHide.style.display = 'none';
                }
            });
        });
    }

    /**
     * Creates the HTML structure for the password visibility icons.
     * @returns {HTMLElement} The HTML element containing the hide and show icons.
     * @private
     */
    private createHtml(): HTMLElement {
        const html = `<div class='eyes-icon'>
            <svg class="hide-eye" style='display:none;'><use xlink:href="/${this.iconPath.hide}"></use></svg>
            <svg class="show-eye"><use xlink:href="/${this.iconPath.show}"></use></svg>
        </div>`;

        const htmlStyle = {
            display: 'none',
            position: 'absolute',
            top: '0',
            right: '0',
            height: '100%',
            width: '35px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d5e3ec'
        };

        let node = Utils.textToHTMLElement(html, "div") as HTMLElement;
        Object.assign(node.style, htmlStyle);
        return this.styleIcons(node) as HTMLElement;
    }

    /**
     * Styles the password visibility icons.
     * @param {HTMLElement} html - The HTML element containing the hide and show icons.
     * @returns {HTMLElement} The HTML element with styled icons.
     * @private
     */
    private styleIcons(html: HTMLElement): HTMLElement {
        let svgs = html.querySelectorAll('svg');
        html.innerHTML = "";
        Utils.processNodes(svgs, (iconSvg: SVGSVGElement) => {
            const style = {
                color: '#999',
                cursor: 'pointer',
                width: '1.5rem',
                height: '1.5rem',
            };
            Object.assign(iconSvg.style, style);
            html.appendChild(iconSvg);
        });
        return html;
    }
}
