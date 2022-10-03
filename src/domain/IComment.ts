import { IProduct } from "./IProduct";
import { IUser } from "./IUser";

export interface IComment {
    id?: number,
    text: string,
    author?: IUser,
    product?: IProduct,
    created_at?: Date,
    updated_at?: Date,
}