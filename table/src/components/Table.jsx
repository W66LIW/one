import React from "react";
import '../style/css/index.css';
//import '../App.css';
import PersonTable from "./PersonTable";
import TablePerson from "./TablePerson";
import PaysTable from "./PaysTable";

import { useSelector } from "react-redux";


function Table() {
    // const personss = useSelector(state => state.persons.persons)
    const personss = useSelector(state => state.persons)
    const months = useSelector(state => state.month.months)
    
    
    return(
        <div className="Data">
            {/* <table className="Table">
            {/* <thead>
            <tr><th></th><th></th><th>ФИО</th><th>Договор</th><th>Стоимость в мес.</th>
            </tr>
            </thead> */}
            {/* <tbody>
                     {
                        [...personss]
                        .sort((a, b) => (a.name < b.name ? 1 : -1))
                        .sort((a, b) => (a.isActive > b.isActive ? 1 : -1))
                        .map(person => {
                            return(
                                <TablePerson key={person.id} person = {person}/>
                            )
                        })
                    } 
                                     
                
                
                     {
                        [...personss]
                        .sort((a, b) => (a.name < b.name ? 1 : -1))
                        .sort((a, b) => (a.isActive > b.isActive ? 1 : -1))
                        .map(person => {
                            return(
                                <PaysTable key={person.id} person = {person}/>
                            )
                        })
                    }                                 
            </tbody> */}
            {/* <thead>
                {[...months].reverse().map(month => {
                    return(
                        <th key={month.id}>{month.name}</th>
                    )
                })}
            </thead>
            <tbody>
                {
                    [...personss]
                    .sort((a, b) => (a.name < b.name ? 1 : -1))
                    .sort((a, b) => (a.isActive > b.isActive ? 1 : -1))
                    .map(person => {
                        return(
                            <PaysTable key={person.id} person = {person}/>
                        )
                    })
                }

            </tbody> */}
            {/* <TableFooter/> */}
            
            
            {/* </table> */} 
            <PersonTable/>
            <PaysTable/>
        </div>
        
    )

}

export default Table;