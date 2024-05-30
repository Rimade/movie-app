import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Skeleton from '../components/PizzaBlock/Skeleton'

const FullPizza = () => {
	const [pizza, setPizza] = useState()
	const { id } = useParams()
	const navigate = useNavigate()

	// useEffect(() => {
	// 	async function fetchPizza() {
	// 		try {
	// 			const { data } = await axios.get(
	// 				'https://6570330709586eff6640e311.mockapi.io/items/' + id
	// 			)
	// 			setPizza(data)
	// 		} catch (error) {
	// 			console.warn(error)
	// 			navigate('/')
	// 		}
	// 	}
	// 	fetchPizza()
	// }, [])

	if (!pizza) {
		return (
			<div className="container fullpizza">
				<Skeleton />
			</div>
		)
	}

	return (
		<div className="container fullpizza">
			<img src={pizza.imageUrl} alt={pizza.title} />
			<h2>{pizza.title}</h2>
			<h2>{pizza.price} ₽</h2>
		</div>
	)
}

export default FullPizza
