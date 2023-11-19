export interface LogData {
  email:      string,
  password:   string
}

export interface UserData {
  displayName?: string | null;
  email?:      string | null;
  emailVerified?: boolean | null;
  phoneNumber?: string | null;
  photoURL?: string | null;
  uid?: string | null;
}
