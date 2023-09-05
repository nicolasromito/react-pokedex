import React, { useContext, useEffect, useState }  from 'react'
import { Context } from '../context/Context';
// import { FaCaretDown } from "react-icons/fa";


export const SortPokemon = () => {

    const { NameAsc, nameDesc, NumberAsc, NumberDesc, filterIcon, openFilter } = useContext(Context)
    
    const [state, setstate] = useState("Numero inferior");
    function selectedItem(){

    }

    return (
        <div className="sort-section">
            <h3 className="sort-text">Ordenar por</h3>
            <div onClick={openFilter} className="select-container">
                <div className="select-box" data-dropdown>
                    <label className="selected-item" data-dropdown-button>
                        {state}
                        <div className="icon-container">
                            {filterIcon}
                        </div>
                    </label>
                    <ul className="select-items">
                        <li onClick={() => {
                            setstate("Numero inferior");                  
                            NumberAsc();
                        }} data-option-value="NumberAsc" className="select-item" data-dropdown-button>
                            Numero inferior
                        </li >
                        <li onClick={() => {
                            setstate("Numero superior")
                            NumberDesc();
                        }} data-option-value="NumberDesc" className="select-item" data-dropdown-button>
                            Numero superior
                        </li>
                        <li onClick={() => {
                            setstate("A-Z");
                            NameAsc();
                        }} data-option-value="NameAsc" className="select-item" data-dropdown-button>
                            A-Z
                        </li>
                        <li onClick={() => {
                            setstate("Z-A");
                            nameDesc();
                        }} data-option-value="nameDesc" className="select-item" data-dropdown-button>
                            Z-A
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}
