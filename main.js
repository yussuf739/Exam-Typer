window.onload = () => {
	const $ = (e) => {
		return document.getElementById(e);
	}

	var wholeDocument = '';
	var i = 1;
	$('questionNo').innerHTML = i+'.';

	
	const next = () => {
		let question = $('question').value;
		let option1 = $('option1').value;
		let option2 = $('option2').value;
		let option3 = $('option3').value;
		let option4 = $('option4').value;

		if (question == '' || option1 == '' || option2 == '') {
			alert('Enter Something!');
		} else {
			question = question.charAt(0).toUpperCase()+question.slice(1);
			option1 = option1.charAt(0).toUpperCase()+option1.slice(1);
			option2 = option2.charAt(0).toUpperCase()+option2.slice(1);
			option3 = option3.charAt(0).toUpperCase()+option3.slice(1);
			option4 = option4.charAt(0).toUpperCase()+option4.slice(1);

			wholeDocument += i+'.  '+question+' (a) '+option1+' (b) '+option2+' (c) '+option3+' (d) '+option4+'<br>';
		i++;

		$('question').value = '';
		$('option1').value = '';
		$('option2').value = '';
		$('option3').value = '';
		$('option4').value = '';
		$('questionNo').innerHTML = i+'.';
		console.log(wholeDocument);
		$('outputText').innerHTML = wholeDocument;
		$('question').setAttribute('autofocus','');
		}
	}


	const previous = () => {
		let question = $('question').value;
		let option1 = $('option1').value;
		let option2 = $('option2').value;
		let option3 = $('option3').value;
		let option4 = $('option4').value;
	}

	const end = () => {
		let question = $('question').value;
		let option1 = $('option1').value;
		let option2 = $('option2').value;
		let option3 = $('option3').value;
		let option4 = $('option4').value;

		wholeDocument += i+'. '+question+' (a) '+option1+' (b) '+option2+' (c) '+option3+' (d) '+option4+'/n';
	}
	$('prev').addEventListener('click', previous);
	$('next').addEventListener('click', next);
	$('end').addEventListener('click', end);
}  