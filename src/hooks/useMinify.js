import { useState, useEffect } from 'react';
import { minify } from 'terser';

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
  format: {
    quote_style: 1,
  },
  ecma: 5,
  module: false,
  sourceMap: false,
};

const useMinify = (text) => {
  const [minified, setMinified] = useState('');

  useEffect(() => {
    minify(text, config).then((res) => {
      setMinified(res.code);
    });
  });

  return minified;
};

export default useMinify;
