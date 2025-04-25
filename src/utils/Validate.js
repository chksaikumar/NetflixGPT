export const checkvalidationData = (email, password) => {
  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const PasswordValidate =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!emailValidate) return "❌ Email Not valid ";
  if (!PasswordValidate) return "❌  Password is not valid ";

  return null;
};

//fire base created
