function Button(props) {
	if (props.href){ return <a className={props.action?"button action":"button"} target="_blank" href={props.href}>{props.msg}</a>}
	else{return <button className={props.action?"button action":"button"} onClick={props.action}>{props.msg}</button>}
}

export default Button