import { useState } from "react";
import ItemModal from "./ItemModal";

function CatalogItem(props) {
	let styles = {
		backgroundImage: "url("+props.src+")",
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat'
	}

	const [modal, setModal] = useState(false);

	let toggleModal = () => {
		setModal(!modal);
	}

	return (
		<>
			<a className='catalog_item'
					style={styles}
					onClick={toggleModal}>
				<div className='desc'>
				<h2>{props.name}</h2>
				</div>
				
			</a>

			{modal && (<div>
				<ItemModal name={props.name} src={props.src} desc={props.desc} link={props.link} modalClick={toggleModal}></ItemModal>
			</div>)}
		</>
	)
}

export default CatalogItem