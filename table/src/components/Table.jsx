import React from "react";
import '../App.css';
import TablePerson from "./TablePerson";
import { useSelector } from "react-redux";


function Table() {
    const personss = useSelector(state => state.persons.persons)
    const months = useSelector(state => state.month.months)
    
    return(
        <table className="Table">
            <thead>
            <tr><th></th><th>ФИО</th><th>ДОГОВОР</th><th>АРЕНДНАЯ ПЛАТА</th>
            {months.map(month => {
                return(
                    <th key={month.id}>{month.name}</th>
                )
            })}
            </tr>
            </thead>
            <tbody>
                {personss.filter((person) => person.isActive === "✓")
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map(person => {
                    return(
                        <TablePerson key={person.id} person = {person}/>
                    )
                })}
            </tbody>
        </table>
    )

}

export default Table;