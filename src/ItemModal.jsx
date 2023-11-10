import Button from "./Button"
import * as Icons from 'react-bootstrap-icons'

Button

function ItemModal(props) {
	
	let styles = {
		backgroundImage: "url("+props.src+")",
		backgroundColor: "var(--bkg-charcoal)",
		backgroundPosition: 'center',
		backgroundSize: 'no-repeat',
		backgroundRepeat: 'no-repeat'
	}
	

	return (
		<>
			<div className="modal row" onClick={props.modalClick}>
				<div className='item panel'style={styles}>
					<div className='col desc'>
						<h2>{props.name}</h2>
						<p>{props.desc}</p>
						<div className="row nav spread">
							<div className="row nav">
								<Button msg={<Icons.Chat className='chat' />}></Button>
								<Button msg={<Icons.Share className='chat' />}></Button>
							</div>
							<Button action="true" href={props.link} msg="Check it out!"></Button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ItemModal