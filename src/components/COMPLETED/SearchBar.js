import './SearchBar.css'
import { useState } from "react";


function SearchBar({onSubmit}) {
    // const handleClick = () =>{
    //     onSubmit('cars')
    // }
    const [term, setTerm] = useState('');
    const handleFormSubmit = (event) =>{
        event.preventDefault();
      onSubmit(term);
    }
    const handleChange = (event) =>{
        setTerm(event.target.value)
    }
    return <div className='search-bar'>
        <label>Enter search:</label>
            <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange} />
            </form>
            {/* <button onClick={handleClick}>Click me</button> */}
    </div>
}

export default SearchBar;