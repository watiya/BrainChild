( () => {
	const formContentLottie = document.getElementById( 'lqd-lottie-form-contact' );
	if ( !formContentLottie ) return;
	bodymovin.loadAnimation( {
		wrapper: formContentLottie,
		animType: 'svg',
		name: 'lqd-lottie-form-contact',
		autoplay: true,
		loop: true,
		path: './assets/json/start-hub-8/lqd-lottie.json',
		rendererSettings: {
			className: 'lqd-lottie',
		}
	} );
	lottie.setDirection( 1, 'lqd-lottie-form-contact' );
	lottie.setSpeed( 1, 'lqd-lottie-form-contact' );
	lottie.pause( 'lqd-lottie-form-contact' );
	new IntersectionObserver( ( [ entry ] ) => {
		if ( entry.isIntersecting ) {
			lottie.play( 'lqd-lottie-form-contact' );
		} else {
			lottie.pause( 'lqd-lottie-form-contact' )
		}
	} ).observe( formContentLottie )
} )();