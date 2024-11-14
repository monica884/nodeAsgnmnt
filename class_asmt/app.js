

const { roll, user } = require("./data_modules/data");


const r1 = new roll(1, 2, "Monica");
//console.log(r1)
console.log(`${r1.summary}`)



const date = new Date("12-03-1999")
const u1 = new user(3, 1234, 30004949, 308876323,date);
//console.log(u1)
console.log(`${u1.Summary},${r1.summary} `)
console.log(user.CompanyName)

