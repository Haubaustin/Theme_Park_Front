import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar'
import Deals from './Deals'
import dummy from '../data/dummy'
import ParkCard from "./ParkCard";

const Main = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [deals, setDealsResults] = useState([])

    const getSearchResults = async (e) => {
        e.preventDefault()
        setSearchResults(dummy)
        setSearchQuery('')
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const getDealResults = () => {
            setDealsResults(dummy)
        }
        getDealResults()
        console.log(getDealResults)
    },[])
    
    return (
        <div>
            <section className="dDisplay">
            {deals.map((res) => (
        <Deals key={res.id} name={res.parkName} />
            ))}
            </section>
        <SearchBar 
            onSubmit={getSearchResults}
            onChange={handleChange}
        />
        <h2>Search Results</h2>
        <section>
            {searchResults.map((result) => (
                <ParkCard key={result.id} name={result.parkName} price={result.parkPrice} />
            ))}
        </section>
        </div>
    )
}

export default Main