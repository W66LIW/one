import React from "react";
import '../style/css/index.css';
import PaysTRow from "./PaysTRow";
import { useSelector, useDispatch } from "react-redux";



function PaysTable() {
    const personss = useSelector(state => state.persons);
    const months = useSelector(state => state.month.months);
    const amounts = useSelector(state => state.amounts);
    let reverseAmounts = [...amounts].reverse()
    console.log('amounts: ' + amounts);

 

    return(
        <div className="OF">
            <table className='Pay'>          
                <thead>
                    <tr>
                        {[...months].reverse().map(month => {
                            return(
                                <th key={month.id}>{month.name}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {                     
                        [...personss]
                        .sort((a, b) => (a.name < b.name ? 1 : -1))
                        .sort((a, b) => (a.isActive > b.isActive ? 1 : -1))
                        .map(person => {
                                return (
                                     <PaysTRow key={person.id} person={person}/>    
                                ) 
                        })
                    } 
                </tbody>
                <tfoot>
                    <tr>
                    { 
                     reverseAmounts.map(sum => <td key={Math.random() + Date.now()} >{sum}</td>) 
                    }
                    </tr>
                </tfoot>     
            </table>

        </div>
        
    )

}

export default PaysTable;