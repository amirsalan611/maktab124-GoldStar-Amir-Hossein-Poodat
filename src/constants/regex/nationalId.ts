export const check_national_code = (national_code: string) => {
  return String(national_code)
    .toLowerCase()
    .match(/^[0-9]{10}$/);
};
