import { changePassword } from "./index";

test("It should try to change a password", async () => {
  const resultFromNoInput = await changePassword(
    "user",
    "password123",
    "password456"
  );
  expect(resultFromNoInput).toBe(true);
});

test("Bad input should return false", async () => {
  const resultFromNoInput = await changePassword("", "", "");
  expect(resultFromNoInput).toBe(false);
});

test("Trying to change the password to 'password' should return false", async () => {
  const resultFromNoInput = await changePassword(
    "user",
    "password123",
    "password"
  );
  expect(resultFromNoInput).toBe(false);
});

test("Inputting identical passwords return false", async () => {
  const resultFromNoInput = await changePassword(
    "user",
    "password123",
    "password123"
  );
  expect(resultFromNoInput).toBe(false);
});

test("It should catch and handle errors thrown by the service call", async () => {
  const resultFromNoInput = await changePassword(
    "error",
    "password123",
    "password456"
  );
  expect(resultFromNoInput).toBe(false);
});
