// Following details can be shows per user
export interface User {
  login: string; //login is the username
  avatar_url: string | null;
  html_url: string | null;
  name: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  followers: number | null;
  following: number | null;
}
