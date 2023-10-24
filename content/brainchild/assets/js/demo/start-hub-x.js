( () => {
	const wrapper_0567a15 = document.getElementById( 'lqd-lottie-features' );
	const animItem_0567a15 = bodymovin.loadAnimation( {
		wrapper: wrapper_0567a15,
		animType: 'svg',
		name: 'lqd-lottie-features',
		autoplay: true,
		loop: true,
		path: './assets/json/start-hub-x/lqd-lottie-features.json',
		rendererSettings: {
			className: 'lqd-lottie',
		}
	} );

	lottie.setDirection( 1, 'lqd-lottie-features' );
	lottie.setSpeed( 1, 'lqd-lottie-features' );

	lottie.pause( 'lqd-lottie-features' );

	new IntersectionObserver( ( [ entry ] ) => {
		if ( entry.isIntersecting ) {
			lottie.play( 'lqd-lottie-features' );
		} else {
			lottie.pause( 'lqd-lottie-features' )
		}
	} ).observe( wrapper_0567a15 )
} )();

// ******

( () => {
	const wrapper_732b232f = document.getElementById( 'lqd-lottie-footer' );
	const animItem_732b232f = bodymovin.loadAnimation( {
		wrapper: wrapper_732b232f,
		animType: 'svg',
		name: 'lqd-lottie-footer',
		autoplay: true,
		loop: true,
		path: './assets/json/start-hub-x/lqd-lottie-footer.json',
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
	} ).observe( wrapper_732b232f )
} )();

