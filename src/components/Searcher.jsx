import { useState, useEffect } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/dataSlice";

const Searcher = ({ setIsSearch })=> {
    const dispatch = useDispatch()

    const handleChange = (e)=> {
        if (e.target.value === ''){
            setIsSearch(false)
        }

        dispatch(setSearch(e.target.value))
        setIsSearch(true)
    }

    return <Input.Search placeholder="Buscar.." style={{marginBottom: 10}} onChange={handleChange}  />
}

export default Searcher 