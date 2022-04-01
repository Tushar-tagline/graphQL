export type albums= {
    id:number;
    title:string;
    userId:number;
}
export type Query={
    alldata: albums[];
}

export interface Gadget {
    Id:number,
    ProductName:string,
    Brand:string,
    Cost:number,
    Type:string
}