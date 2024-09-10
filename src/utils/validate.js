export const checkValidData = (email, password) => {
  // Add validation logic here

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email ID is not a valid";
  if (!isPasswordValid) return "Password is not a valid";

  return null;
};
