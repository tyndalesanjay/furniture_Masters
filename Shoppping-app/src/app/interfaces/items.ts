export class ItemInterface {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  quantity: number;
  productID: any;

  constructor(_id?: string, name?: string, price?: number, description?: string, imageUrl?: string, category?: string, quantity?: number) {
   this._id = _id!,
   this.name = name!,
   this.price = price!,
   this.description = description!,
   this.imageUrl = imageUrl!,
   this.category = category!,
   this.quantity = quantity!
  }
}
