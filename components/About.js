const About = (data, id) => {
	const MIN_WIDTH = 350
	const element = create('p', null, [], id, {
		backgroundColor: '#fff',
		maxWidth: '700px',
		width: '100%',
		borderRadius: '15px',
		boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
		padding: window.innerWidth <= MIN_WIDTH ? '20px 20px' : '20px 100px',
		fontFamily: 'Century Gothic',
		textAlign: 'center',
	}, [], {
		textContent: data.about,
	})

	window.addEventListener('resize', () => {
		element.style.padding = window.innerWidth <= MIN_WIDTH ? '20px 20px' : '20px 10%'
	})

	return element
}