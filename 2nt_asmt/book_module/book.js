



const book_1={
    id:1,
    title:"peace",
    name:"jhon",
    year:1989

}

const book_2={
    id:2,
    title:"programing",
    name:"ada",
    year:1909

}

const book_3={
    id:3,
    title:"HTML",
    name:"james",
    year:2000

}

const book_4={
    id:[],
    title:[],
    name:[],
    year:[]
}


//rest operation
const{...rest}=book_1
console.log(rest)

const{...rest1}=book_2
console.log(rest1)

const{...rest2}=book_3
console.log(rest2)






//destructring of an object
console.log("get specific information from book_2 object")
const {title,year} = book_2;
console.log(title);
console.log(year)




// add new book in book_3
book_4.id.push(4,5)
book_4.name.push("newAuthor_1","newAuthor_2")
book_4.title.push("python","new language")
book_4.year.push(2020,2021)

console.log("add new book")
console.log(book_4)



module.export={
    book_1,
    book_2,
    book_3,
    book_4
}