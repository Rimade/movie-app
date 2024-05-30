import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={500}
		viewBox="0 0 280 500"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<circle cx="130" cy="130" r="130" />
		<rect x="0" y="329" rx="11" ry="11" width="263" height="85" />
		<rect x="0" y="436" rx="9" ry="9" width="100" height="30" />
		<rect x="113" y="429" rx="27" ry="27" width="154" height="40" />
		<rect x="0" y="279" rx="7" ry="7" width="263" height="30" />
	</ContentLoader>
)

export default Skeleton
