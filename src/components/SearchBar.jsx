import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar= () => {

    let navigate = useNavigate()

    const initialState = {
        collectionType: 'planets',
        searchText: ''
    }

    const [searchState, setSearchState] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchState)
      
        /// make the searchState.searchText first letter be capitalized and the rest be lowercase
        const formatedSearchText = searchState.searchText.charAt(0).toUpperCase() + searchState.searchText.slice(1).toLowerCase()
        console.log(formatedSearchText)
        // use the searchState information to change the url
        navigate(`${searchState.collectionType}/${formatedSearchText}`)
        setSearchState(initialState)
    }

    const handleChange = (e) => {
        setSearchState({...searchState, [e.target.id]: e.target.value})
        console.log(e.target.value)
        
    }
    console.log(searchState)

    return (
        <div className="search-bar-div">
            <form onSubmit={handleSubmit}>
                <select className="select-box" id="collectionType" onChange={handleChange} value={searchState.collectionType}>
                    <option value="planets">Planets</option>
                    <option value="moons">Moons</option>
                    <option value="bodies">Space Bodies</option>
                </select>
                <input className="search-text" type="text" id="searchText" onChange={handleChange} value={searchState.searchText}/>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar