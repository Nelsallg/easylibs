

export class FormatParamsToObject
{
    static ACCEPTED_PARAMS: Array<string> = [];
    protected properties: Object = {};

    public constructor(params:{}){
        this.properties = {};
        if(FormatParamsToObject.ACCEPTED_PARAMS.length>0){
            FormatParamsToObject.ACCEPTED_PARAMS.forEach(key => {
                if(params.hasOwnProperty(key)){
                    Object.assign(this.properties,{[key]:params[key]})
                }
            });
        }
    }

    public getProperties(): any{
        return this.properties;
    }
}