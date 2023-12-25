import { processNodes } from "../functions/convert-type";
import { $$ } from "../functions/dom";

export class PocessCollectionsDragAndDrop{
    options: any;
    excludeProducts?: (string | number)[];
    dataResponse: Function;
    protected csrfTokens:any;
    protected getFilteredCollections: Record<string, any> =  {};
    constructor(excludeProducts?: Array<string | number>, dataResponse: Function = (product: any) => {})
    {
        this.excludeProducts = excludeProducts;
        this.dataResponse = dataResponse;
    }


    public processProducts(collectionsProducts:any, collectionId?: string | number) {
        let latestCreatedProducts: Record<string, any> = {};
        const filteredCollections = this.filteredCollections(collectionsProducts) as Record<string, any>;
        this.getFilteredCollections = filteredCollections;
       
        const processCollection = (collection: any[]) => {
            let products = collection.filter((product: any) => product.id);
            if(this.excludeProducts){
                const {excludeProducts} = this;
                products = collection.filter((product: any) => !excludeProducts.includes(product.id));
            }
            const createdAts = products.map((product: any) => new Date(product.created_at.date));
            const createdAtTimestamps = createdAts.map((date: any) => date.getTime());
            const mostRecentTimestamp = Math.max(...createdAtTimestamps);
            const mostRecentDate = new Date(mostRecentTimestamp);
           
            products.forEach((product: any) => {
                const createdAt = new Date(product.created_at.date);
                if(createdAt.toISOString() === mostRecentDate.toISOString()){
                    const productCollectionId = product.collections.id;
                    latestCreatedProducts[`collection@${productCollectionId}`] = product;
                }
            });
        };
    
        if(collectionId){
            const collections = filteredCollections[`collection@${collectionId}`] || [];
            processCollection(collections);
        }else{
            const collections = Object.values(filteredCollections).filter((collectionItem: any) => collectionItem);
            collections.forEach(processCollection);
        }
    
        return latestCreatedProducts;
    }
    
    
    protected filteredCollections(collections:any){
        let filteredCollections:any = {}
        if(collections){
            for(const [key, value] of Object.entries(collections)){
                if(Array.isArray(value)){
                    filteredCollections[key] = value;
                }
            }
        }
        return filteredCollections;
    }

    public filterByCreatedAt(products:any[]): Record<string, any>
    {
        let latestCreatedProducts: Record<string, any> = {};
        const createdAts = products.map((product: any) => new Date(product.created_at));
        const createdAtTimestamps = createdAts.map((date: any) => date.getTime());
        const mostRecentTimestamp = Math.max(...createdAtTimestamps);
        const mostRecentDate = new Date(mostRecentTimestamp);
        
        products.forEach((product: any) => {
            const createdAt = new Date(product.created_at);
            if(createdAt.toISOString() === mostRecentDate.toISOString()){
                const productCollection = product.collections as string;
                const productCollectionId = productCollection.split('/')[3];
                latestCreatedProducts[`collection@${productCollectionId}`] = product;
            }
        });
        return latestCreatedProducts;
    }

    // public filterByPosition(products:any[])
    // {
    //     products.forEach((product: any) => {
    //         const createdAt = new Date(product.created_at);
    //         if(createdAt.toISOString() === mostRecentDate.toISOString()){
    //             const productCollection = product.collections as string;
    //             const productCollectionId = productCollection.split('/')[3];
    //             latestCreatedProducts[`collection@${productCollectionId}`] = product;
    //         }
    //     });
    // }

    public get _collectionIds(): Array<string|number>
    {
        const collections = $$(".coll");
        let collectionsIds:Array<string|number> = []
        processNodes(collections, function(collection:HTMLElement){
            const ID = collection.dataset.collId as string;
            collectionsIds.push(ID);
        })
        return collectionsIds;
    }

    public get _collections(){
        return this.getFilteredCollections;
    }
    public get _csrfTokens(){
        return this.csrfTokens;
    }
}