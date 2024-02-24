import { useSearchParams } from "react-router-dom"
import Select from "./Select";

function FilterDropDown({options , filterField}) {
    const [searchParams , setSerchParams] = useSearchParams();
    const value = searchParams.get(filterField) || "";
    function handleChange(e){
        searchParams.set(filterField , e.target.value);
        setSerchParams(searchParams)
    }
  return (
    <Select onChange={handleChange} value={value} options={options}/>
  )
}

export default FilterDropDown 