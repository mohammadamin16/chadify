// 09912147018 -> +989912147018
// 9912147018 -> +989912147018
// 989912147018 -> +989912147018
export function getCleanPhoneNumber(phone: string) {
  if (phone.startsWith("0")) {
    phone = phone.slice(1);
  }
  if (phone.startsWith("98")) {
    phone = phone.slice(2);
  }
  return `+98${phone}`;
}
