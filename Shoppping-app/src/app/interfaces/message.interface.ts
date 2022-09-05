export class Message {
  _id: String;
  name: String;
  subject: String;
  email: String;
  message: String;

  constructor(
    _id: String,
    message: String,
    name: String,
    subject: String,
    email: String
  ) {
    this._id = _id!;
    this.name = name!;
    this.subject = subject!;
    this.email = email!;
    this.message = message!;
  }
}
