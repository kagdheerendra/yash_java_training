export interface Cart {

    bufcartId: number;
    orderId: number;
    email: string;
    dateAdded: any;
    quantity: number;
    price: number;
    productId: number;
    productName: string;
    subTotal?:number;
}
