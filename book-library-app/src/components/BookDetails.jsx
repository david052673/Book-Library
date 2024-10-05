const BookDetails = ({ book, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-2 rounded shadow-lg max-w-lg w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">&times;</button>
        <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Published:</strong> {book.publish_date}</p>
        <p><strong>ISBN:</strong> {book.isbn?.[0]}</p>
        <p><strong>Pages:</strong> {book.number_of_pages}</p>
        <p><strong>Subjects:</strong> {book.subject?.join(', ')}</p>
      </div>
    </div>
  );
  
  export default BookDetails;