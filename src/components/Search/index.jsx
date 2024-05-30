import React, { useCallback, useRef } from 'react'
import debounce from 'lodash.debounce'

import styles from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectSearch,
	setSearchValue,
	setValue,
} from '../../redux/slices/searchSlice'

const Search = () => {
	const dispatch = useDispatch()
	const { value } = useSelector(selectSearch)
	const inputRef = useRef()

	const onClickClear = () => {
		dispatch(setSearchValue(''))
		dispatch(setValue(''))
		inputRef.current.focus()
	}

	const updateSearchValue = useCallback(
		debounce((str) => {
			dispatch(setSearchValue(str))
		}, 600),
		[]
	)

	const onChangeInput = (event) => {
		dispatch(setValue(event.target.value))
		updateSearchValue(event.target.value)
	}

	return (
		<div className={styles.root}>
			<svg
				className={styles.icon}
				enableBackground="new 0 0 32 32"
				id="Glyph"
				version="1.1"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
					id="XMLID_223_"
				/>
			</svg>
			<input
				ref={inputRef}
				className={styles.input}
				type="text"
				onChange={onChangeInput}
				value={value}
				placeholder="Поиск пиццы..."
			/>

			{value && (
				<svg
					onClick={onClickClear}
					className={styles.clearIcon}
					version="1.1"
					viewBox="0 0 14 14"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title />
					<desc />
					<defs />

					<g
						fill="#000000"
						id="Core"
						transform="translate(-341.000000, -89.000000)"
					>
						<g id="close" transform="translate(341.000000, 89.000000)">
							<path
								d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
								id="Shape"
							/>
						</g>
					</g>
				</svg>
			)}
		</div>
	)
}

export default Search
