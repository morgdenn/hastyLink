import React, { useState, useEffect } from 'react';

import useBookmarklet from './hooks/useBookmarklet';
import useMinify from './hooks/useMinify';

function BookmarkBtn() {
  const bookmarkletOrig = useBookmarklet();
  const bookmarkletMin = useMinify(bookmarkletOrig);
  const [btnHtml, setBtnHtml] = useState('');

  useEffect(() => {
    setBtnHtml(`
      <a
        href="javascript:${bookmarkletMin}"
        class="btn btn-primary btn-lg"
      >
      Hasty.Link
      </a>
    `);
  }, [bookmarkletMin]);

  return (
    <>
      <div
        className="text-center mt-5"
        dangerouslySetInnerHTML={{ __html: btnHtml }}
      />
    </>
  );
}

export default BookmarkBtn;
