console.log("js linked");

const $rotator = $('.js-rotator');

$rotator.on('click', (e) => {
	console.log("hit");
    $rotator.addClass('rotated');
})

