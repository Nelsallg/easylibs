import { Flash } from "../components/flash";
import { FetchRequest } from "../modules/fetch-request";
import { textHtmlToNode } from "./convert-type";
import { $$ } from "./dom";
import { isEndScrolling } from "./scroll-behavior";

export function paginator(
    parentElement:HTMLElement|string, 
    skeleton_loading:string, 
    callback:Function=(response:any,that:HTMLElement)=>{},
    _csrf_token:boolean = false,
    margin?:{x:number,y:number})
{
    const element = $$(parentElement) as HTMLElement;
    let lastRequestSuccessfully = true;
    isEndScrolling(element,(is:boolean,scroll:string)=>{
        if(element && true === is){
            const next_page_number = element.dataset.nextPageNumber;
            const uri = element.dataset.uri as string;
            if(next_page_number && "null" !== next_page_number && true === lastRequestSuccessfully){
                const preFetchAction = async function (){
                    if("y" === scroll){
                        let cart_process = cardProccess();
                        let skeleton_loading_container  = null;
                        let time = 3
                        if(cart_process.length !== undefined && cart_process.length < 3){
                            skeleton_loading_container = cart_process.element
                            time = 3 - cart_process.length
                        }else{
                            skeleton_loading_container = cardProccess()
                        }
                        if(skeleton_loading_container){
                            if(skeleton_loading_container instanceof Element){
                                for(let i = 0; i < time; i++){
                                    skeleton_loading_container.appendChild(textHtmlToNode(skeleton_loading) as Node);
                                }
                            }else if(typeof skeleton_loading_container == "object"){
                                for(let i = 0; i < time; i++){
                                    skeleton_loading_container.element.appendChild(textHtmlToNode(skeleton_loading) as Node);
                                }
                            }
                        }
                        
                    }
                    if("x" === scroll){
                        element.appendChild(textHtmlToNode(skeleton_loading) as Node);
                    }
                    
                    return lastRequestSuccessfully = false;
                }
                const postFetchAction = function(){
                    const {response} = request;
                    if(response.success){
                        lastRequestSuccessfully = true;
                        return callback(response,element)
                    }
                    if(!response.success){
                        const {causes} = response;
                        new Flash()
                        .addFlash({
                            type:'danger',
                            message:`${causes}`,
                            icon:'svg/alert.svg#danger',
                            duration: 5000
                        });
                    }
                }
                const request = new FetchRequest({
                    uri,data:{next_page_number:next_page_number,
                    _csrf_token:_csrf_token},
                    preFetchAction,postFetchAction,
                    options:{
                        method: "POST",
                        acceptDataFormat:"form-data"
                    }
                })
            }
        }
    },margin);
}

function getLastRowCardChild() {
    const parent = document.querySelector('.product_card_container') as HTMLElement;
    return parent.querySelector('.row_card_parent:last-child');
}


export function cardProccess() {
    const lastChild = getLastRowCardChild();
    if(!lastChild){
        return { element: createRowCardParent() };
    }
    const rows = lastChild.querySelectorAll('.row_card_child');
    if(rows.length < 3){
        return { element: lastChild, length: rows.length };
    }
    return { element: createRowCardParent() };
}


function createRowCardParent() {
    const div = document.createElement('div');
    div.className = 'row row_card_parent';
    document.querySelector('.product_card_container')?.appendChild(div);
    return div;
}