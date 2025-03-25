import { useState } from "react"

// export function Databinding() {
//     const [get] = useState(33531650000)
//     return (
//         <div className="container-fluid">
//             <h1>Binding Data</h1>
//             <p>GDP Of India is  {get.toLocaleString('en-in', { style: 'currency', currency: 'inr' })}</p>
//         </div>
//     )
// }


// export function Stringbinding() {
//     const [get] = useState("d");
//     return (
//         <div>
//             <p>
//                 {
//                     (isNaN(get))?'AGE MUST BE A NUMBER':get
//                 }
//             </p>
//         </div>
//     );
// }

// export function Stringconcard(){
// const [validationclass]=useState('text-warning')
// return(
//     <div className="container-fluid">
//         <h2 className={`border border-1 mt-2 p-3 text-center ${validationclass}`}>Databinding</h2>
//     </div>
// );
// }

// export function Booleandata() {
//     const [stock] = useState('falsen')
//     return (
//       <p>
//         {(stock==='true')?'avilable': 'empty'}
//       </p>
//     );
// }

export function Arraydata() {
  // var [categories] = useState(['mobile', 'dress', 'food', 'bike']);
  // return (
  //   <div className="container-fluid">
  //     <h2>Categories</h2>
  //     <nav className="btn-group">
  //       {
  //         categories.map(categories => <button className="btn btn-danger">{categories}</button>)
  //       }
  //     </nav>
  //     <div>
  //       <select className="bg-dark text-white mt-3">
  //         {
  //           categories.map(categories => <option>{categories}</option>)
  //         }
  //       </select>
  //     </div>
  //     <div>
  //       <ul className="mt-4">
  //         {
  //           categories.map(categories=> <li>{categories}</li>)
  //         }
  //       </ul>
  //     </div>
  //   </div>
  // );


  var[cost]=useState(['40000','23000','56000','34890','10000','45600']);
  return(
    <div>
      <h3>price above 40k</h3>
      <ol>
      {
        // cost.filter(price=> price>=40000).map(item=> <li>{item}</li> ).sort().reverse()
        cost.filter(price => price >= 40000).map(main => <li>{main}</li>)
      }
    </ol>
    </div>
  );

 

}