export default class ScrollBehavior {
    private static initialMouseY = 0;
    private static initialScrollTop = 0;
    private static isRightClickPressed = false;
    /**
    * Cette fonction active les fonctionnalités de défilement et de glissement sur la page. 
    * Elle permet à l'utilisateur d'interagir avec la page en utilisant la souris, 
    * la molette de la souris et le clavier pour faire défiler le contenu. 
    * En appelant cette fonction, 
    * l'utilisateur peut profiter d'une expérience de navigation plus interactive et personnalisée.
    */
    public static run(): void {
        window.addEventListener('mousedown', this.handleMouseDown);
        window.addEventListener('wheel', this.handleWheel);
        window.addEventListener('keydown', this.handleKeyDown);
    }

    public static isEndScrolling(element: HTMLElement, callback: Function = (is: boolean, scroll: string) => {}, margin?: { x: number, y: number }): boolean {
        let marginX = 0;
        let marginY = 0;
        if (margin) {
        marginX = margin.x ?? 0;
        marginY = margin.y ?? 0;
        }

        element.addEventListener('scroll', function (e) {
        if (this.scrollTop > 0 && (this.scrollTop + this.clientHeight) + marginY >= this.scrollHeight) {
            return callback(true, 'y');
        }
        if (this.scrollLeft > 0 && (this.scrollLeft + this.clientWidth) + marginX >= this.scrollWidth) {
            return callback(true, 'x');
        }
        });

        return callback(false);
    }
    /**
     * Gère l'événement de clic de souris enfoncé (mousedown) pour activer le défilement personnalisé.
     * Enregistre la position initiale de la souris et active 
     * les écouteurs d'événements de mouvement de souris et de relâchement de clic.
     * @param event - L'événement de clic de souris enfoncé.
     */
    private static handleMouseDown(event: MouseEvent): void {
      if (event.button === 2) {
        this.isRightClickPressed = true;
        this.initialMouseY = event.clientY;
        this.initialScrollTop = window.scrollY;
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
      }
    }
    /**
     * Gère l'événement de mouvement de souris (mousemove) 
     * pour effectuer le défilement en fonction du mouvement de la souris.
     * @param event - L'événement de mouvement de souris.
     */
    private static handleMouseMove(event: MouseEvent): void {
      if (this.isRightClickPressed) {
        const deltaY = event.clientY - this.initialMouseY;
        window.scrollTo(0, this.initialScrollTop - deltaY);
      }
    }
    /**
     * Gère l'événement de relâchement de clic de souris (mouseup) pour désactiver le défilement personnalisé.
     * Nettoie les écouteurs d'événements de mouvement de souris et de relâchement de clic.
     * @param event - L'événement de relâchement de clic de souris.
     */
    private static handleMouseUp(event: MouseEvent): void {
      if (event.button === 2) {
        this.isRightClickPressed = false;
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
      }
    }
    /**
     * Cette fonction gère les événements de défilement de la molette de la souris sur la page. 
     * Lorsque l'utilisateur fait tourner la molette de la souris vers le haut ou vers le bas, 
     * cette fonction permet de faire défiler la page dans la direction correspondante. 
     * Cela offre une alternative pratique à la barre de défilement traditionnelle pour naviguer sur la page.
     * @param event
     */
    private static handleWheel(event?: WheelEvent): void {
      if (this.isRightClickPressed) {
        if (event !== undefined) {
          if (event.deltaY > 0) {
            window.scrollBy(0, 100);
          } else if (event.deltaY < 0) {
            window.scrollBy(0, -100);
          }
        }
      }
    }
    /**
     * Cette fonction gère les événements de pression d'une touche du clavier. 
     * Lorsque l'utilisateur enfonce la touche "ArrowDown" (flèche vers le bas), 
     * cette fonction permet de faire défiler la page vers le bas. 
     * Elle offre une méthode simple pour naviguer rapidement 
     * à travers le contenu de la page en utilisant uniquement le clavier.
     * @param event 
     */
    private static handleKeyDown(event?: KeyboardEvent): void {
      if (event !== undefined) {
        if (this.isRightClickPressed && event.key === 'ArrowDown') {
          window.scrollBy(0, 100);
        }
      }
    }
}
  