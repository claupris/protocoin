export default Storage = {
  setUser(key, user) {
    localStorage.setItem(key, JSON.stringify(user));
  },

  getUser(key) {
    return localStorage.getItem(key);
  },

  removeUser(key) {
    return localStorage.removeItem(key);
  },

  /*setToken(token) {
    localStorage.setItem("Token", token);
  },

  getToken() {
    return localStorage.getItem(Token);
  },

  removeToken() {
    localStorage.removeItem(Token);
  },

  setUsername(username) {
    localStorage.setItem("Username", username);
  },

  getUsername() {
    return localStorage.getItem(Username);
  },

  removeUsername() {
    localStorage.removeItem(Username);
  },

  setPassword(password) {
    localStorage.setItem("Password", password);
  },

  getPassword() {
    return localStorage.getItem(Password);
  },

  removePassword() {
    localStorage.removeItem(Password);
  },

  setFirstName(firstName) {
    localStorage.setItem("FirstName", firstName);
  },

  getFirstName() {
    return localStorage.getItem(FirstName);
  },

  setLastName(lastName) {
    localStorage.setItem("LastName", lastName);
  },

  getLastName() {
    return localStorage.getItem(LastName);
  },

  setEmail(email) {
    localStorage.setItem("Email", email);
  },

  getEmail() {
    return localStorage.getItem(Email);
  },

  setTransactions(transactions) {
    localStorage.setItem("Transactions", JSON.stringify(transactions));
  },

  getTransactions() {
    return localStorage.getItem(Transactions);
  },*/
};
