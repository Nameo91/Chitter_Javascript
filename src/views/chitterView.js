class ChitterView {
  constructor(model, client, user) {
    this.model = model;
    this.client = client;
    this.user = user;

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayPeeps() {
    // display all peeps added
    const allPeeps = this.model.getPeeps();

    allPeeps.forEach((peep) => {
      const peepEl = document.createElement('div');
      peepEl.className = 'peep';

      const peepBody = document.createElement('p');
      peepBody.textContent = `${peep.body} @${peep.user.handle}`;
      peepBody.className = 'peep-body';

      const createdTimeEl = document.createElement('div');
      createdTimeEl.textContent = peep.updated_at;
      createdTimeEl.className = 'peep-updated-time';
      
      peepEl.append(peepBody);
      peepEl.append(createdTimeEl);
      this.mainContainerEl.append(peepEl);
    });
  }

  displayPeepsFromApi() {
    // display all peeps data from Api
    this.client.loadPeeps((response) => {
      this.model.setPeeps(response);
      this.displayPeeps();
    });
  }

  addNewPeep(newPeep) {
    // add peeps into the peepModel
  }

  signUp() {
    // add new user
  }

  signIn() {
    // keep user session
  }
}

module.exports = ChitterView;