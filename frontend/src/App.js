import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  // Use this base URL, update it as needed
  const API_BASE_URL = "http://127.0.0.1:51413";

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/books`);
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author) return alert('Please fill in both fields.');

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author }),
      });

      if (!res.ok) throw new Error('Failed to add book');

      const newBook = await res.json();
      setBooks([...books, newBook]);
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>Book List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Book'}
        </button>
      </form>

      <ul>
        {books.length === 0 ? (
          <li>No books found.</li>
        ) : (
          books.map(book => (
            <li key={book._id}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
