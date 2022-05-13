import { stubbedServiceCall } from "./stubs.test";

export async function changePassword(
  userName: string,
  oldPassword: string,
  newPassword: string
): Promise<boolean> {
  // sanity checks
  if (!userName || !oldPassword || !newPassword) return false;
  if (oldPassword === newPassword) return false;

  // sometimes you have to save the user from themselves..
  if (newPassword === "password") return false;

  let passwordChangeSuccessful: boolean = false;
  try {
    // call backend service to change password
    passwordChangeSuccessful = await stubbedServiceCall(
      userName,
      oldPassword,
      newPassword
    );
  } catch (error) {
    console.log("Oh noh, changing the password failed!", error);
    return false;
  }
  return passwordChangeSuccessful;
}
