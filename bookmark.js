javascript:var defaultEmail = 'morgdenn@gmail.com',
	Q = '',
	x = document,
	y = window;

/* If you have text selected, put that in the email body. */
if (x.selection) {
	Q = x.selection.createRange().text;
} else if (y.getSelection) {
	Q = y.getSelection();
} else if (x.getSelection) {
	Q = x.getSelection();
}

/* If there is no selected text, use the page description in the email body. */
if (escape(Q).length === 0 && document.getElementsByName('description')[0]) {
	Q = document.getElementsByName('description')[0].getAttribute('content');
}

/* Set the email title. */
su = document.title;
su = su.replace('«', ' ');
su = su.replace(/(\xbb|\xa0|\0|\n|\f|\r|\t|\v)/gmi, ' ');
su = escape(su);

/* Pop up the email window */
var popw = window.open(
  'https://mail.google.com/mail?view=cm&tf=0&to='+defaultEmail+'&su='+su+'&body='+escape(Q)+escape('\n\n')+escape(location.href), 
  'gmailForm', 
  'scrollbars=yes,width=680,height=510,top=175,left=75,status=no,resizable=yes'
);

if (!document.all) T = setTimeout('popw.focus()', 50);
void(0);
