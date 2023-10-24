( () => {
	const wrapper_093c16a = document.getElementById( 'lqd-lottie-confetti' );
	const animItem_093c16a = bodymovin.loadAnimation( {
		wrapper: wrapper_093c16a,
		animType: 'canvas',
		name: 'lqd-lottie-confetti',
		autoplay: true,
		loop: false,
		path: './assets/json/start-hub-4/confetti.json',
		rendererSettings: {
			className: 'lqd-lottie',
		}
	} );

	lottie.setDirection( 1, 'lqd-lottie-confetti' );
	lottie.setSpeed( 0.7, 'lqd-lottie-confetti' );

	lottie.pause( 'lqd-lottie-confetti' );

	new IntersectionObserver( ( [ entry ] ) => {
		if ( entry.isIntersecting ) {
			lottie.play( 'lqd-lottie-confetti' );
		} else {
			lottie.pause( 'lqd-lottie-confetti' )
		}
	} ).observe( wrapper_093c16a )

	// ******

	const wrapper_c833602 = document.getElementById( 'lqd-lottie-footer' );
	const animItem_c833602 = bodymovin.loadAnimation( {
		wrapper: wrapper_c833602,
		animType: 'svg',
		name: 'lqd-lottie-footer',
		autoplay: true,
		loop: true,
		path: './assets/json/start-hub-4/gradient-color.json',
		rendererSettings: {
			className: 'lqd-lottie',
		}
	} );

	lottie.setDirection( 1, 'lqd-lottie-footer' );
	lottie.setSpeed( 0.5, 'lqd-lottie-footer' );

	lottie.pause( 'lqd-lottie-footer' );

	new IntersectionObserver( ( [ entry ] ) => {
		if ( entry.isIntersecting ) {
			lottie.play( 'lqd-lottie-footer' );
		} else {
			lottie.pause( 'lqd-lottie-footer' )
		}
	} ).observe( wrapper_c833602 )
} )();