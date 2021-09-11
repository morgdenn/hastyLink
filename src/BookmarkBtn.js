import React, { useState, useEffect } from 'react';

import Options from './Options.js';
import useBookmarklet from './hooks/useBookmarklet';
import useMinify from './hooks/useMinify';

import { minify } from 'terser';

function BookmarkBtn() {
  const bookmarkletOrig = useBookmarklet();

  const [bookmarklet, setBookmarklet] = useState('');
  const [settings, setSettings] = useState({ default_to: '' });
  const [btnHtml, setBtnHtml] = useState('');

  const bookmarkletMin = useMinify(bookmarkletOrig);

  /* useEffect(() => {
    const newBookmarklet = bookmarkletOrig.replace(
      '{{default_to}}',
      settings.default_to
    );

    setBookmarklet(newBookmarklet);
  }, [bookmarkletOrig, settings]);

  useEffect(() => {
    setBookmarkletMin(minifyMarklet(bookmarklet));
  }, [bookmarklet]);

  useEffect(() => {
    setBtnHtml(`
      <a
        href="javascript:${bookmarkletMin}"
        class="btn btn-primary btn-lg"
      >
        Hasty.Link
      </a>
    `);
  }, [bookmarkletMin]); */

  const handleChange = () => {};

  return (
    <>
      <div
        className="text-center mt-5"
        dangerouslySetInnerHTML={{ __html: btnHtml }}
      />

      <Options setSettings={setSettings} />

      <textarea
        rows="4"
        className="form-control mt-5"
        value={JSON.stringify(settings)}
        onChange={handleChange}
      ></textarea>

      <textarea
        rows="4"
        className="form-control mt-5"
        value={bookmarkletMin}
        onChange={handleChange}
      ></textarea>

      <textarea
        rows="20"
        className="form-control mt-5"
        value={bookmarklet}
        onChange={handleChange}
      ></textarea>
    </>
  );
}

export default BookmarkBtn;
