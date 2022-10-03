
export interface IProduct {
    id?: number,
    name: string,
    description: string,
    image?: string | File,
    created_at?: Date,
    updated_at?: Date,
    is_active: boolean
};