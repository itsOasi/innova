import { useState } from 'react'
import Catalog from './Catalog'
import Filter from './Filter'

function Container2() {
  const [count, setCount] = useState(0)

  return (
	<>
		<div className='catalog_header'>
			<h1>Our Apps</h1>
		</div>
		<div id="catalog" className='col container'>
			<Filter />
			<Catalog />
		</div>
	</>
  )
}

export default Container2