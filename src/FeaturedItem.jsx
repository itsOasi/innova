import { useState } from "react";

function FeaturedItem(props) {
	let styles = {
		backgroundImage: "url("+props.src+")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	}

	return (
		<>
			<a className='featured_item'
					style={styles}
					href={props.href}>
				<div className='desc'>
				<h2>{props.name}</h2>
				<p>{props.msg}</p>
				</div>
				
			</a>
		</>
	)
}

export default FeaturedItem