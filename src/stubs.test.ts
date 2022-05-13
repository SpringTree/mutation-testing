export async function stubbedServiceCall(
  userName: string,
  oldPassword: string,
  newPassword: string
): Promise<boolean> {
  if (userName === "error") {
    throw new Error();
  }
  return true;
}
