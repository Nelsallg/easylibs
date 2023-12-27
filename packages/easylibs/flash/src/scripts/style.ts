
export function cssStyle(type:string, style={width:'400px',height:'100px',br:'3px',color:'#f8f9fa'}){
    switch(type.toLowerCase()){
        case 'info':
            return {
                backgroundColor:'#17a2b8',
                color:style.color,
                width:style.width,
                height:style.height,
                borderRadius:style.br
            }
        case 'warming':
            return {
                backgroundColor:'#ffc107',
                color:style.color,
                width:style.width,
                height:style.height,
                borderRadius:style.br
            }
        case 'success':
            return {
                backgroundColor:'#28a745',
                color:style.color,
                width:style.width,
                height:style.height,
                borderRadius:style.br
            }
        default:
            return {
                backgroundColor:'#dc3545',
                color:style.color,
                width:style.width,
                height:style.height,
                borderRadius:style.br
            }
    }
}
