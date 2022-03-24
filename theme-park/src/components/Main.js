import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar'
import Deals from './Deals'
import dummy from '../data/dummy'
import target from '../data/target'
import ParkCard from "./ParkCard";
import BudgetCard from './BudgetCard'

const Main = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [deals, setDealsResults] = useState([])
    const [searchValue, setSearchValue] = useState()
    const [budgetResults, setBudgetResults] = useState([])
    const [searching, setSearching] = useState(false)

    const getSearchResults = async (e) => {
        setSearching(true)
        e.preventDefault()
        setSearchResults(dummy)
        setSearchQuery('')
    }

    const getBudgetResults = async (e) => {
        setSearching(false)
        e.preventDefault()
        setBudgetResults(target)
        setSearchValue('')
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
    
    const handleValue = (e) => {
        setSearchValue(parseInt(e.target.value))
    }

    return (
        <div>
            <section className="dDisplay">
            {deals.map((res) => (
        <Deals key={res.id} name={res.parkName} />
            ))}
            </section>
        <SearchBar 
            onSubmit1={getSearchResults}
            onSubmit2={getBudgetResults}
            onChange={handleChange}
            onCheck={handleValue}
            value1={searchQuery}
            value2={searchValue}
        />
        <h2>Search Results</h2>
        <section>
            {searching && searchResults.map((result) => (
                <ParkCard key={result.id} name={result.parkName} price={result.parkPrice} />
            ))}
            {!searching && budgetResults.map((result) => (
                <BudgetCard key={result.id} name={result.parkName} price={result.parkPrice} />
            ))}
        </section>
        </div>
    )
}

export default Main