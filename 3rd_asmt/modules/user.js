class user {

    // static {
    //     this._Company = "XYZ";
    // }

    // static get Company() {
    //     return this._Company;
    // }

    constructor(login_id, password, cell_1, cell_2, date_of_birth, name) {


        this._id = login_id;
        this._pswrd = password;
        this._cell1 = cell_1;
        this._cell2 = cell_2;
        this._birthday = date_of_birth
        this._name = name;
}

   
}


module.exports={
    user
}