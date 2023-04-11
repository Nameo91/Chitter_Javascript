class PeepModel {
  constructor() {
    this.peepList = [];
  }

  getPeeps() {
    return this.peepList;
  }

  addPeep(peep) {
    this.peepList.push(peep);
  }

  setPeeps(peepsFromApi) {
    peepsFromApi.forEach((peep) => {
      this.peepList.push(peep);
    })
  }
}

module.exports = PeepModel;