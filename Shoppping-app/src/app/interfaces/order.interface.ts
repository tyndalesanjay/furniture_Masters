export class Order {
  _id: string;
  customername: string;
  ordernumber: number;
  products: Array<any>;
  status: string;

  constructor(
    _id?: string,
    customername?: string,
    ordernumber?: number,
    products?: Array<any>,
    status?: string
  ) {
    this._id = _id!;
    this.customername = customername!;
    this.ordernumber = ordernumber!;
    this.products = products!;
    this.status = status!;
  }
}
