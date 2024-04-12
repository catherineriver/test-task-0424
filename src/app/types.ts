export interface ButtonType {
    createdAt: string;
    price: string;
    custom_text?: string;
    product_id: number;
    color: string;
    id: number;
}

export interface ProductType {
    createdAt: string;
    name: string;
    price: string;
    images: [];
    original_price: string;
    url: string;
    id: number;
}
