import {createContext, useState} from "react" 

export const SearchContext = createContext()
function SearchProvider(props){
const [searchValue, setSearchValue] = useState()
return (
  <SearchContext.Provider value={[searchValue, setSearchValue]}>{props.children}</SearchContext.Provider>
)
}
export default SearchProvider
