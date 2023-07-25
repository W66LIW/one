import React from "react";
import '../style/css/index.css';
import TablePerson from "./TablePerson";
import { useSelector } from "react-redux";


function PersonTable() {
    const personss = useSelector(state => state.persons)  
    
    return(
        <div>
            <table className="Table">
            <thead>
            <tr><th></th><th></th><th>ФИО</th><th>Договор</th><th>Цена</th>
            </tr>
            </thead>
            <tbody>
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
            </tbody>
            <tfoot >
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            </tfoot>
            </table>
        </div>
        
    )

}

export default PersonTable;