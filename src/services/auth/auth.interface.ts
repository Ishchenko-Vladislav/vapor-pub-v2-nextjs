export interface ITokens {
  access_token: string;
  refresh_token: string;
}

export interface ILoginDTO {
  email: string;
  password: string;
}

// export interface I

export interface IRegisterDTO {
  username: string;
  email: string;
  password: string;
}
