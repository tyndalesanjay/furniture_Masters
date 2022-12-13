export class UserInterface {
  _id: string
  username: String
  email: String;
  password: String;
  createdAt: Date;
  data: Array<any>

  constructor(
    _id?: string,
    username?: string,
    email?: string,
    password?: string,
    createdAt?: Date,
    data?: Array<any>
  ) {
    this._id = _id!;
    this.username = username!;
    this.email = email!;
    this.password = password!;
    this.createdAt = createdAt!;
    this.data = data!;
  }
}


