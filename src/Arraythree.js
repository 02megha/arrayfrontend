import {useState}  from "react";

import "./App.css"
 
const Arraythree =()=>{
    const [Books , setBooks] = useState
    (["physics", "maths", "english", "hindi"])
    const handleUpdatesBooks =()=>{
        setBooks(["ecomomics", "biology" , "chemisty", "physics"])
    };

    return(
        <>
<p>THE IMPORTANT BOOKS FOR FUTURE</p>
<ul>

{Books.map((v)=> {

return(
    <li> {v}</li>
)

})}


</ul>

<button onClick={() => handleUpdatesBooks()} type ="button">
Update BOOKS
</button> 
        

        </>
    )
}

 export default Arraythree;