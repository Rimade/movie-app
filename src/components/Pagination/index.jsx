import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'
import { selectFilter, setCurrentPage } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Pagination = () => {
	const dispatch = useDispatch()
	const { currentPage } = useSelector(selectFilter)

	return (
		<>
			<ReactPaginate
				className={styles.root}
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
				pageRangeDisplayed={4}
				pageCount={3}
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
			/>
		</>
	)
}

export default Pagination
