export interface UserServer {
  code: number;
  message: string;
  me: User;
}

export interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  identityNumber: number;
  updateDate: string;
}
