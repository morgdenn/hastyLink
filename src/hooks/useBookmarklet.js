import { useState, useEffect } from 'react';

const useBookmarklet = () => {
  const [bookmarklet, setBookmarklet] = useState('');

  useEffect(() => {
    fetch('bookmark.js')
      .then((response) => response.text())
      .then((text) => {
        setBookmarklet(text);
      });
  }, []);

  return bookmarklet;
};

export default useBookmarklet;
