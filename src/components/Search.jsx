import React, {useState} from "react";
import styled from "styled-components";

function Search({setSearchResults}){
    const [search, setSearch] = useState('');
    const onSubmit = e => {e.preventDefault();
    setSearchResults(search);
    setSearch('')
    }
    return(
        <StyledSearch><form onSubmit={onSubmit}>
            <input type="text" placeholder="Search your Location " value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </form></StyledSearch>
    );
}

const StyledSearch = styled.div`
margin-bottom: 35px;
margin-top: 20px;

input{
    width: 65%;
    height:40px;
    border-radius:10px;
    padding: 20px;

}

`;
export default Search