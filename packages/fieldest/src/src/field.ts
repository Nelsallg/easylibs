import TomSelect from "tom-select";

export async function customSelect(data:{
    target:string, 
    search:string,
    uri:string, 
    hasDescription?:boolean,
    onFocusEventUri?:string,
})
{
    const description =   data.hasDescription ? (value:string) =>{
        return `<div class="description">${value}</div>`
    }:()=>{return ""};

    new TomSelect(data.target, {
        create: false,
        valueField: 'id',
        labelField: data.search,
        searchField: [data.search],
        options: data.onFocusEventUri ? await onFocusEventHandler(data.onFocusEventUri) : undefined,
        plugins: {
			'caret_position': {}, 
			'remove_button': {},
		},
        load: (query:any, callback:any) => {
            fetch(`/${data.uri}?q=${encodeURIComponent(query)}`)
                .then(response => response.json())
                .then(data => callback(data));
        },
        render: {
            option: function(item:any, escape:any) {
                return `<div class="py-2 d-flex">
                            <div class="col-8">
                                <div class="mb-1"><span class="h4">${escape(item[data.search])}</span></div>
                                ${description(escape(item.description))}
                            </div>
                          </div>`;
            }
        },
    });
}

async function onFocusEventHandler(uri?:string)
{
    try {
        const response = await fetch(uri??"");
        return await response.json();
    } catch (error) {
        return console.error('Erreur lors de la récupération des données :', error);
    }
}