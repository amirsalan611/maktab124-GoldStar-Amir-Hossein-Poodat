declare module "redux-persist-cookie-storage" {
  export class CookieStorage {
    constructor(
      cookies: unknown,
      options?: { expiration?: { default?: number }; secure?: boolean }
    );
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
  }
}
