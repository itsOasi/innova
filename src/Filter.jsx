import Button from "./Button"

function Filter() {
	let filters = ["Gaming", "Productivity", "Tepmplates"] 
  
	return (
		<div id='filter' className="row">
			{filters.map(filter => <Button key={filter} className="filter_item" msg={filter}></Button>)}
		</div>
	)
  }

export default Filter