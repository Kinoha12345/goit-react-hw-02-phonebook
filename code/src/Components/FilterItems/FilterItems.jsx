const FilterItems = ({filter,onInputValue}) => {
    return ( <><input onChange={onInputValue} name="filter" value={filter}>
    </input></> );
}
 
export default FilterItems;