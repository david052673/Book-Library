const BookCard = ({ book, onClick }) => (
    <div className="border 090jh rounded shadow hover:shadow-lg cursor-pointer" onClick={onClick}>
      <img src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <p>{book.publisher?.[0]}</p>
    </div>
  );
  
  export default BookCard;