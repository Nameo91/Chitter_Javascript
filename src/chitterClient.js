class ChitterClient{
  #BASE_URL = "https://chitter-backend-api-v2.herokuapp.com/";
  
  loadPeeps(cb) {
    fetch(this.#BASE_URL + "peeps")
      .then((response) => response.json())
      .then((data) => {
        console.log('Peeps are loaded');
        cb(data)
      })
    .catch(error => {
      console.log("Failed!", error);
    })
  }

  createUser(userId, passowrd) {
    // POST to create a new user
  }

  newSession(userId, password) {
    // POST to create a new log in session
  }

  addPeep(uerId, sessionKey, newPeep) {
    // POST to add new peep
  }
}

module.exports = ChitterClient;