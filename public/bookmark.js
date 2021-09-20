(function () {
  var default_to = '';
  var body = '';

  // Has any text been selcted
  if (window.getSelection) {
    body = window.getSelection().toString();
  }

  // Get the page description.
  if (body.length === 0 && document.getElementsByName('description')[0]) {
    body = document.getElementsByName('description')[0].getAttribute('content');
  }

  // Get the page title
  var subject = document.title
    .replace('«', ' ')
    .replace(/(\xbb|\xa0|\0|\n|\f|\r|\t|\v)/gim, ' ');

  window.open(
    'mailto:?' +
      '&to=' +
      default_to +
      '&subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body) +
      escape('\r\n\r\n') +
      encodeURIComponent(window.location.href),
    '_blank'
  );
})();
