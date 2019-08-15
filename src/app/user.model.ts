export class User {

  constructor(private _email: string, private _password: string) {
    this.email = _email
    this.password = _password
  }

  email: string;
  password: string;
}
