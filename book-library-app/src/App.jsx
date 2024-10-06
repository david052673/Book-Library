import React, { useState, useEffect } from 'react';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import BookCard from './components/BookCard';
import BookDetails from './components/BookDetails';
const page=()=>{
  <p> <page/> </p>
}
const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [error, setError] = useState('');

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setBooks(data.docs);
      setError('');
    } catch (error) {
      setError('Failed to fetch books. Please try again.');
    }
  };

  return (
    
    <div className='m-11'>
      <header className='items-center'>
      
         <h1 className=' pb-11 pt-5 pl-32'>📔 Online Library </h1>
      </header>
      <div className='bg-[url(https://th.bing.com/th/id/OIP.NjNr7MpHQ4jOsrbYGfo-VAHaE5?rs=1&pid=ImgDetMain)] bg-gradient bg-cover items-center justify-center h-screen'>

        <div className='text-white p-53 mr-19 ml-11  px-36 pt-24'>
          <h1>WHAT A GREAT MOMENT!HAVE A LOOK AND EXPLORE AWESOME BOOKS! </h1>
        </div>
        <SearchBar onSearch={fetchBooks} />
         {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.key} book={book} onClick={() => setSelectedBook(book)} />
        ))}
        
        </div>
         {selectedBook && <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />}

        
         <div className='mr-12 ml-13 mt-76 p-20 text-blue-600 text-center'><h1>Enjoy studying and exploring more books📚</h1></div>
         <div className=''> <Footer/> </div>
        </div>
        
    </div>

    
  );
  
};

export default App;
