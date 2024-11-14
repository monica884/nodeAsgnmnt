


class roll {
    constructor(id, name) {
        this._Id = id;
        this._Name = name;

    }
    get _Id() {
        return this.Id

    }
    set _Id(value) {
        if (value < 1) {
            console.log("please enter valid id");

            return;
        }
        this.Id = value;

    }
    get _Name() {
        return this.Name

    }
    set _Name(value) {
        if (value.length > 50) {
            console.log("your name length must be 50");

            return;
        }
        this.Name = value;
    }
    get summary() {
        return `${this._Name}, ${this._Id}`
    }
}

module.exports = {
    roll
}