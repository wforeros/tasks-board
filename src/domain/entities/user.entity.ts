export type IUser = {
  id?: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
};

export class User implements IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.dateOfBirth = user.dateOfBirth;
  }

  toDto() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      date_of_birth: this.dateOfBirth
    };
  }

  static fromDto(userApi: object) {
    const user = new User({
      id: userApi['id'],
      name: userApi['name'],
      email: userApi['email'],
      password: userApi['password'],
      dateOfBirth: userApi['date_of_birth']
    });
    return user;
  }
}
