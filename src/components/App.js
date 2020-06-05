import React from 'react';
import PageLanding from './Landing';
import PageAbout from './About';
import WIP from './common/WIP';
import PageLiveDates from './LiveDates';

function App() {
	return (
		<>
			<WIP />

			<PageLanding />

			<PageAbout />

			<PageLiveDates />
		</>
	);
}

export default App;
