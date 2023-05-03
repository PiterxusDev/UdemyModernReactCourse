import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        // const response = await axios.

        const response = await axios.get('http://localhost:3001/books');

        console.log(response)
        // const response = await fetch('http://localhost:3001/books')
        setBooks(response.data)
        // console.log(await response.json())
    }, []);





    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });
        // const response = await fetch(`http://localhost:3001/books/${id}`,{
        //     method: 'PUT',
        //     body: JSON.stringify({ 'title': newTitle }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }

        // })
        // console.log(await response.json())
        // const data = await response.json()
        // console.log('->',data.title)
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }
                // return { ...book, ...data }
            }
            return book;
        })
        setBooks(updateBooks);
    };

    const deleteBookById = async (id) => {
        axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updatedBooks);

    };
    const createBook = async (title) => {
        // Mirar cómo obtener data con fetch
        // const response = await fetch('http://localhost:3001/books',{
        //     method:'POST',
        //     body: JSON.stringify({'title':title}),
        //     headers:{
        //         'Content-Type' : 'application/json'
        //     }
        // })

        const response = await axios.post('http://localhost:3001/books', {
            title,
        })

        //    console.log(await response.json())

        //    const data = await response.json();
        //    console.log('->',data.title)

        const updateBooks = [
            ...books,
            response.data
        ];
        setBooks(updateBooks);
    }

    const valueToShare = {
        books,
        deleteBookById,
        createBook,
        editBookById,
        fetchBooks
    }
    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>

}

export { Provider };
export default BooksContext;

//import BooksContext, {Provider} from ... EXample to share this two elements.