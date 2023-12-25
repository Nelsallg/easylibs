
const stopPropagation = function (e: Event){
    e.stopPropagation();
};


function switchAnimation(element:HTMLElement,fromInToOut:boolean,animation?:{type:string,position:string}) 
{
    if(undefined !== animation){
        const animeType = animation.type ?? 'fade'
        const animePosition = animation.position ?? 'top'
        if(true === fromInToOut){
            element.classList.remove(`${animeType}-out-${animePosition}`);
            element.classList.add(`${animeType}-in-${animePosition}`);
        }else{
            element.classList.remove(`${animeType}-in-${animePosition}`);
            element.classList.add(`${animeType}-out-${animePosition}`);
        }
    }
}


export function animeIn(
    element: HTMLElement,
    animation?:{type:string,position:string},
    display?:string) 
{
    switchAnimation(element,true,animation);
    if (undefined !== display){
        element.style.display = display;
    }else{
        element.style.display = 'block';
    }
}



export function animeOut(
    element: HTMLElement,
    animation?:{type:string,position:string},
    display?:string,
    delay?: number,
    closeButton?:HTMLElement) 
{
    if(undefined !== display){
        if(undefined !== closeButton){
            closeButton.addEventListener('click',function(){
                switchAnimation(element,false,animation);
                setTimeout(() => {
                    element.style.display = 'none';
                }, delay||0);
            })
        }
        switchAnimation(element,false,animation);
        setTimeout(() => {
            element.style.display = 'none';
        }, delay||0);
        return;
    }else{
        if(undefined !== closeButton){
            closeButton.addEventListener('click',function(){
                switchAnimation(element,false,animation);
                setTimeout(() => {
                    element.remove();
                }, delay||0);
                return;
            })
        }
        switchAnimation(element,false,animation);
        setTimeout(() => {
            element.remove();
        },delay||0);
    }
}



export function animeInOut(
    openButton: HTMLElement,
    element: HTMLElement,
    display = 'block',
    animation?:{type:string,position:string},
    closeButton?: HTMLElement,
    dispatchCloseEvent?: any,
    delay=350)
{
    let modalIsOpen = false;
    try {
        openButton.addEventListener('click', function () {
            if (false === modalIsOpen) {
                modalIsOpen = true;
                animeIn(element,animation,display);
            }else{
                modalIsOpen = false;
                animeOut(element,animation,display,delay);
            }
        });

        if(undefined !== closeButton && !modalIsOpen){
            closeButton.addEventListener('click', function () {
                modalIsOpen = false;
                animeOut(element,animation,display,delay);
            });
            if(dispatchCloseEvent.value === true){
                const dispElement = dispatchCloseEvent.key as HTMLElement;
                document.addEventListener('click', function (event: MouseEvent) {
                    const eventTarget = event.target as Node;
                    if (!openButton.contains(eventTarget) && !closeButton.contains(eventTarget) && !dispElement.contains(eventTarget)){
                        modalIsOpen = false;
                        animeOut(element,animation,display,delay);
                    }
                });
                dispElement.addEventListener('click', stopPropagation);
            }
            return;
        }
        if(undefined === closeButton  && !modalIsOpen){
            if(undefined === dispatchCloseEvent.key && true === dispatchCloseEvent.value){
                document.addEventListener('click', function (event: MouseEvent) {
                    const eventTarget = event.target as Node;
                    if(!openButton.contains(eventTarget) && !element.contains(eventTarget)){
                        modalIsOpen = false;
                        animeOut(element,animation,display,delay);
                    }
                });
                element.addEventListener('click', stopPropagation);
            }else{
                const dispElement = dispatchCloseEvent.key as HTMLElement;
                document.addEventListener('click', function (event: MouseEvent) {
                    const eventTarget = event.target as Node;
                    if(!openButton.contains(eventTarget) && !dispElement.contains(eventTarget)){
                        modalIsOpen = false;
                        animeOut(element,animation,display,delay);
                    }
                });
                dispElement.addEventListener('click', stopPropagation);
            }
        }
    }catch(error){
        throw new Error('HTMLElement null or undefined.');
    }
}
