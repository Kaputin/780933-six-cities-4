export const parseLogin = (data) => {
  return {
    email: data.login,
    password: data.password,
  };
};

export const parseUser = (data) => {
  return {
    avatar: data.avatar_url,
    email: data.email,
    id: data.id,
    isPro: data.is_pro,
    name: data.name,
  };
};
