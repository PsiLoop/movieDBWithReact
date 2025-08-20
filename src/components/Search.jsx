import React from 'react'
import { Search} from "lucide-react";


const SearchBar= ({searchTerm, setSearchTerm}) => {
    return (
        <div className="search">
            <div>
                <Search className="abs`olute left-2 h-5 w-5"/>
                <input type="text"
                placeholder="Search through thousands of movies"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
            </div>
        </div>
    )
}
export default SearchBar
