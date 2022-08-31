export class ItemInterface {
  _id: number;
  name: String;
  price: number;
  description: String;
  imageUrl: String;
  category: String;
  quantity: number;
  productID: any;

  constructor(_id?: number, name?: String, price?: number, description?: String, imageUrl?: String, category?: String, quantity?: number) {
   this._id = _id!,
   this.name = name!,
   this.price = price!,
   this.description = description!,
   this.imageUrl = imageUrl!,
   this.category = category!,
   this.quantity = quantity!
  }
}
