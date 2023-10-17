class Book {
    constructor(title,author,noOfPages,typeOfBook){
        this.title = title.toLowerCase()
        this.author = author
        this.noOfPages = noOfPages
        this.typeOfBook = typeOfBook
    }
    printInfo(){
        console.log(`This is a ${this.typeOfBook} titled ${this.title} written by ${this.author} with ${this.noOfPages} pages`)
    }
}

class Library  {
    constructor(bookList){
this.bookList = bookList
    }

    add_book(BookInfo){
        this.bookList.push(BookInfo)
    }

    print_bookList(){
        console.log(this.bookList)
    }

    print_Books(){
       for (let book of this.bookList){
        console.log(`This is a ${book.typeOfBook} titled ${book.title} written by ${book.author} with ${book.noOfPages} pages`)
       }
    }
    borrow_book(placeholderTitle){
        for (let i = 0 ; i < this.bookList.length ; i++){
            if (placeholderTitle.toLowerCase() === this.bookList[i].title){
            
            return this.bookList.splice(i,1)
        }
        }
        return "None"
    }
}


const deyemiLibrary = new Library([])


deyemiLibrary.add_book(new Book("How to love for 8 years","Adeyemi Abdulateef","2000","Romance"))
deyemiLibrary.add_book(new Book("Intro to Software","Oladehinde Inuoluwadunsimilopolopo","200","Engineering"))
deyemiLibrary.print_Books()
console.log(deyemiLibrary.borrow_book("love"))
console.log(deyemiLibrary.borrow_book("Intro to Software"))




