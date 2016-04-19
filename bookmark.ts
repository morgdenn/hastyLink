javascript:

(function () {

	var defaultEmail: string = '';

	var body: string = '';

	/* If you have text selected, put that in the email body. */
	if (window.getSelection) {
		body = window.getSelection().toString();
	}

	/* If there is no selected text, use the page description in the email body. */
	if (encodeURI(body).length === 0 && document.getElementsByName('description')[0]) {
		body = document.getElementsByName('description')[0].getAttribute('content');
	}

	/* Set the email title. */
	var su = document.title;
	su = su.replace('«', ' ');
	su = su.replace(/(\xbb|\xa0|\0|\n|\f|\r|\t|\v)/gmi, ' ');
	su = encodeURI(su);

	/* Pop up the email window */
	window.open(
	  'https://mail.google.com/mail?view=cm&tf=0&to='+defaultEmail+'&su='+su+'&body='+encodeURI(body)+'%0A%0A'+encodeURI(location.href),
	  'gmailForm',
	  'scrollbars=yes,width=680,height=510,top=175,left=75,status=no,resizable=yes'
	);

	return undefined;
})();