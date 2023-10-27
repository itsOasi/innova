import { useState } from 'react'
import * as Icons from 'react-bootstrap-icons'
import Button from './Button'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
		<div id='header'>
			<img className='logo' src="./innova-title-11@2x.png"></img>
			<div className='nav row'>
				<Button href='https://instagram.com/roseling_gd?igshid=OGQ5ZDc2ODk2ZA==' msg={<Icons.Instagram className='icon' />}></Button>
				{/* <Button action="true" href="https://donate.stripe.com/cN24gP5PM1Z371mdQQ" msg="Support Us"></Button> */}
			</div>
		</div>
    </>
  )
}

export default Header