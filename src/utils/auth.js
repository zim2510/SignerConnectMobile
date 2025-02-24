export function tokenLoader() {
  const tokenStr = localStorage.getItem("token");
  const token = JSON.parse(tokenStr);
  return token;
}

export function invalidateLogin() {
  localStorage.clear();
}
