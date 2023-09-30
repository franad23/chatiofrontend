export interface User {
  username: string;
  password: string;
}

export interface UserContact {
  id: string,
  username: string,
  contacts?: object[]
}