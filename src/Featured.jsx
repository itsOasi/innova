import { useEffect, useState } from 'react'
import FeaturedItem from './FeaturedItem';
const HOST = "https://innova-server-2jochkae6a-uc.a.run.app";



function Featured() {
	// name, desc, src
	const [cat, setCat] = useState([])

	useEffect(() => {
		const getArt = async () => {
			const res = await fetch(`${HOST}/get_catalog`);
			res.json().then(catalog =>{
				let catalog_list = [];
				for (let _prod in catalog){
					catalog_list.push(catalog[_prod]);
				}
				setCat(catalog_list);
			})
		}
		getArt()
	}, [])

	if (cat.length > 0){

		return (
			<div>
				<div id='featured_list' className='row'>
					{cat.map(piece => <FeaturedItem
					key={piece.title}
					name={piece.title} 
					desc={piece.desc}
					src={piece.image} />)}
				</div>
			</div>
		)
	}
	return (<h2>Nothing to see here</h2>)
}

export default Featured