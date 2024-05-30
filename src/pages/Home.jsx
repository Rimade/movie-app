import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import Categories from './../components/Categories'
import Skeleton from './../components/PizzaBlock/Skeleton'
import Sort, { sortList } from './../components/Sort'
import PizzaBlock from './../components/PizzaBlock/index'
import Pagination from '../components/Pagination'

import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, setFilters } from '../redux/slices/filterSlice'
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice'
import { selectSearch } from '../redux/slices/searchSlice'

const Home = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isSearch = useRef(false)
	const isMounted = useRef(false)

	const { categoryId, currentPage, sort } = useSelector(selectFilter)
	const { items, status } = useSelector(selectPizzaData)
	const { searchValue } = useSelector(selectSearch)

	// const getPizzas = async () => {
	// 	const sortBy = sort.sortProperty.replace('-', '')
	// 	const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
	// 	const category = categoryId > 0 ? `category=${categoryId}` : ''
	// 	const search = searchValue ? `&search=${searchValue}` : ''

	// 	dispatch(
	// 		fetchPizzas({
	// 			sortBy,
	// 			order,
	// 			category,
	// 			search,
	// 			currentPage,
	// 		})
	// 	)

	// 	window.scrollTo(0, 0)
	// }
	// useEffect(() => {
	// 	if (isMounted.current) {
	// 		const queryString = qs.stringify({
	// 			sortProperty: sort.sortProperty,
	// 			categoryId: categoryId > 0 ? categoryId : null,
	// 			currentPage,
	// 		})

	// 		navigate(`?${queryString}`)
	// 	}
	// 	isMounted.current = true
	// }, [categoryId, sort, searchValue, currentPage])

	// useEffect(() => {
	// 	if (window.location.search) {
	// 		const params = qs.parse(window.location.search.substring(1))

	// 		const sort = sortList.find(
	// 			(obj) => obj.sortProperty === params.sortProperty
	// 		)

	// 		dispatch(
	// 			setFilters({
	// 				...params,
	// 				sort,
	// 			})
	// 		)
	// 		isSearch.current = true
	// 	}
	// }, [])

	// useEffect(() => {
	// 	if (!isSearch.current) {
	// 		getPizzas()
	// 	}
	//
	// isSearch.current = false
	// }, [categoryId, sort, searchValue, currentPage])

	const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)

	const skeletons = [...new Array(4)].map((_, index) => (
		<Skeleton key={index} />
	))

	return (
		<div className="container">
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">Фильмы</h2>
			{status === 'error' ? (
				<div className="content__error-info">
					<h2>Произошла ошибка 😟</h2>
					<p>К сожалению, не удалось получить питсы. Попробуйте позже...</p>
				</div>
			) : (
				<div className="content__items">
					{status === 'loading' ? skeletons : pizzas}
				</div>
			)}
			<Pagination />
		</div>
	)
}

export default Home
