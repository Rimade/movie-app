import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	value: '',
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue(state, action) {
			state.searchValue = action.payload
		},
		setValue(state, action) {
			state.value = action.payload
		},
	},
})

export const selectSearch = (state) => state.search

export const { setSearchValue, setValue } = searchSlice.actions

export default searchSlice.reducer
