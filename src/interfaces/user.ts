export interface User {
  username: string;
  password: string;
}

export interface UserContact {
  _id: string,
  username: string,
  contacts?: object[]
}