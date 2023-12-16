export interface Login {
  username: string
  password: string
}

export interface UserInfo {
  username: string
  age: number
  sex: string
  role: string
  [propName: string]: any
}
