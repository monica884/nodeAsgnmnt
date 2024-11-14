
class roll {
    constructor(adminid, guestid, name) {
        this._Id = adminid;
        this._guestid = guestid;
        this._Name = name;

    }

    get _Id() {
        return this.admin_Id

    }
    set _Id(value) {
        if (value < 1) {
            console.log("please enter valid id");

            return;
        }
        this.admin_Id = value;

    }

    get _guestid() {
        return this.guest_Id

    }
    set _guestid(value) {
        if (value < 1) {
            console.log("please enter valid id");

            return;
        }
        this.guest_Id = value;

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
        return `${this._Name}, ${this._Id}, ${this._guestid}`
    }
}

class user {

    //there is some error in static its not working 
    static {
        this.CompanyName = "EVS";
    }


    constructor(loginid, password, contact1, contact2, dob) {
        this._loginid = loginid
        this._password = password
        this._contact1 = contact1
        this._contact2 = contact2
        this._dob = dob
        user.CompanyName
    }

    get _loginid() {
        return this.login_id
    }

    set _loginid(value) {
        if (value < 1) {
            console.log("please enter valid id");

            return;
        }
        this.login_id = value;

    }

    get _password() {
        return this.Password
    }

    set _password(value) {
        if (value != 1234) {
            console.log("Password not match")
            return;
        }
        this.Password = value;
    }

    get _contact1() {
        return this.Contact_1
    }

    set _contact1(value) {
        if (value < 0) {
            console.log("please enter your phone number")
            return;
        }
        this.Contact_1 = value
    }

    get _contact2() {
        return this.Contact_2
    }

    set _contact2(value) {
        if (value < 0) {
            console.log("please enter your phone number")
            return;
        }
        this.Contact_2 = value
    }

    get _dob() {
        return this.date_of_birth
    }
    set _dob(value) {
        if (!(value instanceof Date)) {
            console.log("plase enter your date of birth")
            return
        }
        this.date_of_birth = value
    }

    get Summary() {
        return `${this._loginid} ,${this._password} ,${this._contact1} , ${this._contact2}, ${this._dob}, ${this.CompanyName}`;
    }
}

module.exports = {
    roll,
    user
}