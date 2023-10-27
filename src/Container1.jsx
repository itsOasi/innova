import { useState } from 'react'
import Featured from './Featured'

function Container1() {
  const [count, setCount] = useState(0)

  return (
	<div>
		<div id="catalog" className='col container'>
			<Featured />
		</div>
	</div>
  )
}

export default Container1