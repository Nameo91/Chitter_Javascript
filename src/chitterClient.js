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
}

module.exports = ChitterClient;