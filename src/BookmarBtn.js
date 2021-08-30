import React, { useState, useEffect } from 'react';

import { minify } from 'terser';
import Options from './Options.js';

function BookmarkBtn() {
  const [linkJS, setLinkJS] = useState('');
  const [settings, setSettings] = useState({});

  const getJSLink = () => {
    fetch('bookmark.js')
      .then((response) => response.text())
      .then((text) => {
        text = text.replace('{{default_to}}', settings.default_to);

        setLinkJS(text);
      });
  };

  const minifyLink = (text) => {
    const config = {
      compress: {
        dead_code: true,
        drop_console: true,
        drop_debugger: true,
        keep_classnames: false,
        keep_fargs: false,
        keep_fnames: false,
        keep_infinity: false,
      },
      mangle: {
        eval: false,
        keep_classnames: false,
        keep_fnames: false,
        toplevel: false,
        safari10: false,
      },
      module: false,
      sourceMap: false,
      output: {
        comments: false,
      },
    };

    // Minify the code with Terser
    const minified = minify(text, config).code;

    return minified;
  };

  useEffect(() => {
    getJSLink();
  });

  return (
    <>
      <div className="text-center mt-5">
        <a
          href={'javascript:' + minifyLink(linkJS)}
          className="btn btn-primary btn-lg"
        >
          Hasty.Link
        </a>
      </div>

      <Options setSettings={setSettings} />

      <textarea
        rows="4"
        className="form-control mt-5"
        value={JSON.stringify(settings)}
      ></textarea>

      <textarea
        rows="20"
        className="form-control mt-5"
        value={linkJS}
      ></textarea>
    </>
  );
}

export default BookmarkBtn;
