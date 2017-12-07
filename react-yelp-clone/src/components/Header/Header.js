import React from 'react'
import {Link} from 'react-router'

import styles from './styles.module.css'

function Header() {
	return (
		<div className={styles.topbar}>
			<Link to="/"><h1>Yelp</h1></Link>
			<section>
				Fullstack.io
			</section>
		</div>
	);
}

export default Header