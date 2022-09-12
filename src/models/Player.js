export default class Player {

  constructor(firstname, lastname, registered, color ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.registered = registered;
    this.color = color;
  }

  static Builder = class {
      _firstname = null;
      _lastname = null;
      _registered = null;
      _color = null;


      setFirstname(value) {
          this._firstname = value;
          return this;
      }

      setLastname(value) {
          this._lastname = value;
          return this;
      }

      setRegistered(value) {
          this._registered = value;
          return this;
      }

      setColor(value) {
          this._color = value;
          return this;
      }

      build(){
          const player = new Player(
              this._firstname,
              this._lastname,
              this._registered,
              this._color
          )
          return player
      }
  }
}