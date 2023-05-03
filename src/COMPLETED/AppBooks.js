import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from './hooks/use-books-context';


function AppBooks() {

    const {fetchBooks} =useBooksContext();

    useEffect(() => {
        
        //No muestra todos los libros. Corregir
        fetchBooks();
    }, [])



    return <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
}

export default AppBooks;