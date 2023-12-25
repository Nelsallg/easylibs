export function initializeCssStyle(element:any)
{
    document.addEventListener('turbo:load', function() {
    //    if(element instanceof NodeList){
    //     for (var i = 0; i < element.length; i++) {
    //       if (!element[i].classList.contains('preserve-style')) {
    //         element[i]. // Réinitialise tous les styles de l'élément
    //       }
    //     }

        if(!element.classList.contains('preserve-style')){
            element.style = null;
        }
    })
    
      
}
