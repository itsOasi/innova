import { useState } from 'react'
import Catalog from './Catalog'
import Filter from './Filter'

function Container2() {
  const [count, setCount] = useState(0)

  return (
	<div id='container2'>
		<div className='catalog_header'>
			<b>
				Our Apps
			</b>
		</div>
		<div id="catalog" className='col'>
			<Filter />
			<Catalog />
		</div>
	</div>
  )
}

export default Container2