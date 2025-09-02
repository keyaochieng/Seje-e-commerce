export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    images: Record<string,string>;

}

export type ProductsType = ProductType[]

export type CartItemType = ProductType & {
    quantity:number;
    selectedSize:string;
}

export type CartItemsType = CartItemType[]