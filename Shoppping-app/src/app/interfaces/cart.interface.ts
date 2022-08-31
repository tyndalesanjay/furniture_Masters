export class Cart {
  _id: String;
  productID: String;

  constructor(_id?: String, productID?: String) {
    this._id = _id!;
    this.productID = productID!;

  }
}
