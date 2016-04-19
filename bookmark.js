javascript: (function () {
    var defaultEmail = '';
    var body = '';
    if (window.getSelection) {
        body = window.getSelection().toString();
    }
    if (encodeURI(body).length === 0 && document.getElementsByName('description')[0]) {
        body = document.getElementsByName('description')[0].getAttribute('content');
    }
    var su = document.title;
    su = su.replace('«', ' ');
    su = su.replace(/(\xbb|\xa0|\0|\n|\f|\r|\t|\v)/gmi, ' ');
    su = encodeURI(su);
    window.open('https://mail.google.com/mail?view=cm&tf=0&to=' + defaultEmail + '&su=' + su + '&body=' + encodeURI(body) + '%0A%0A' + encodeURI(location.href), 'gmailForm', 'scrollbars=yes,width=680,height=510,top=175,left=75,status=no,resizable=yes');
    return undefined;
})();
