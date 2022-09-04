export class Order {
  _id: string;
  customername: string;
  ordernumber: string;
  orderTotal: number;
  products: Array<any>;
  status: string;
  createdAt: Date;

  constructor(
    _id?: string,
    customername?: string,
    ordernumber?: string,
    orderTotal?: number,
    products?: any,
    status?: string,
    createdAt?: Date
  ) {
    this._id = _id!;
    this.customername = customername!;
    this.ordernumber = ordernumber!;
    this.orderTotal = orderTotal!;
    this.products = products!;
    this.status = status!;
    this.createdAt = createdAt!;
  }
}
