type email =
  | Email(string);
type userId =
  | UserId(string);

type userInfo = {
  email,
  userId,
};

type user =
  | Anonymous
  | LoggedIn(userInfo);
