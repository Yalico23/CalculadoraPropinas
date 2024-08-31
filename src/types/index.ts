export type DBTypes = {
    id:number,
    name:string,
    price:number
}

export type OrderTypes = DBTypes &{
    quantity: number
}

export type IdOrderType = Pick <DBTypes , 'id'>