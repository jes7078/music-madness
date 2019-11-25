import React from 'react'
import data from './data/band-names.json'
const Bands = (props) => {
	console.log(props)
	const BandNames = data.names.filter((item) => {
		return item.name === props.match.params.name
	})[0]
	console.log(BandNames)
	return (
		<section className="changer">
			<h1>{BandNames.name}</h1>
			<h1>{BandNames.otherName}</h1>
			<section className="pic">
				<img src={BandNames.image} alt="" />
			</section>
			<p>{BandNames.albumInfo}</p>
		</section>
	)
}

export default Bands
