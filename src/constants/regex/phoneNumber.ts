export const check_phone_number = (phone_number: string) => {
  return String(phone_number)
    .toLowerCase()
    .match("^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$");
};
