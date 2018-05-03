

const $rotator = $('.js-rotator');
let selected = false; //determine if a selection has been made. 

//rotate selection
$rotator.on('click', (e) => {
	if(!selected){
    	$(e.target).addClass('rotated');
    	selected = true;
    	setTimeout(() => {
               pickLetter(e.target)
        }, 1000);
        setTimeout(() => {
               thanksForPlaying()
        }, 2000);
	}
})

// Ideally I'd place a function here that would
// query backend to provide three values based
// on unclaimed values stored in an array but
// for this exercise I've used random numbers.
// Why not just generate a random number when
// the envelope is turned. Firstly, legal
// compliance. But also it's kind of dick move. 

//fill in values for envelopes:
let values = [Math.floor(Math.random() * 3 + 1), Math.floor(Math.random() * 3 + 1), Math.floor(Math.random() * 3 + 1)];
let outcome = 0; //This is for verification and would be sent back to server.


function pickLetter(target){
	let env = target.classList[1];
	if(env == 'card1'){
		letter(values[0]);
	} else if(env == 'card2'){
		letter(values[1]);
	} else if(env == 'card3'){
		letter(values[2]);
	}
}

function letter(n){
	outcome = n;
	if(n == 1){
		document.querySelector(".rotated .letterHead").innerHTML = "SORRY :(";
		document.querySelector(".rotated .letterText").innerHTML = "Better luck next time."
	} else if(n == 2){
		document.querySelector(".rotated .letterHead").innerHTML = "NICE!";
		document.querySelector(".rotated .letterText").innerHTML = "You've won $5 of drive credit!"
	} else if(n == 3){
		document.querySelector(".rotated .letterHead").innerHTML = "CONGRATS!";
		document.querySelector(".rotated .letterText").innerHTML = "You've won our grand prize!"
	}
}


const $input = $('.js-email');

$input.on('keydown', e => {
	if (e.key === "Enter") {
		e.preventDefault();
		const email = $(e.target).val();
		console.log(email);
		window.location.href = "envelopes.html";
	}
})

function thanksForPlaying() {
	document.querySelector(".thanks").innerHTML = "Thanks for playing!";
}