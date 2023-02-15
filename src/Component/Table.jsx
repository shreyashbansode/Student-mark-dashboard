import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

import "../App.css"


 const Table = () => {
const [Data,setData] = useState([])


const[search,setSearch]= useState();
// console.log(search);
console.log(Data);

  useEffect(() => {

    axios.get("http://localhost:8000/")
    .then(async(res)=>{
          // console.log(res.data)
          const data  =await res.data
          setData(data);

    })
    .catch((err)=>{
      console.log(err)
    })


  },[])

  const deleteHandler = ()=>{
    
  }



 const filter = Data.filter((data)=>{


  if(search === ""){
    return data;
  }else if(data.studentName.toLowerCase().includes(search.toLowerCase())){
    return data;
  }
 })
  
  return (
    <>
      
    <div className='main'>
      <div className='searchbx'>
        <input type="text" placeholder='search...' onChange = {(e)=>setSearch(e.target.value)} value={search} />

      </div>
    <NavLink to="/adduser"> <button type="button" class="btn btn-primary btnprimary">Add User</button></NavLink>
    <table class="table table-striped ">
       
  <thead>
    <tr>
      <th scope="col">Roll No</th>
      <th scope="col">Student Name</th>
      <th scope="col">Mathematics</th>
      <th scope="col">Science</th>
      <th scope="col">English</th>
      <th scope="col">Hindi</th>
      <th scope="col">Marathi</th>
      <th scope="col">Total</th>
      <th scope="col">Percentage</th>
      <th scope="col">Grade</th>
      <th scope="col">Update Detail</th>
      <th scope="col">delete</th>
      
    </tr>
  </thead>
  <tbody>

    

    { Data.map((row,index)=>{

      return(

        <>


          <tr className={row.per <= 35 ? "red" : row.per> 35 && row.per < 75 ? "yello" : "green"}>


          
      <th scope="row">{index+1}</th>
      <td>{row.studentName}</td>
      <td>{row.maths}</td>
      <td>{row.science}</td>
      <td>{row.english}</td>
      <td>{row.hindi}</td>
      <td>{row.marathi}</td>
      <td>{row.total}/500</td>
      <td >{row.per}%</td>
      <td>{row.Grade}</td>
      <td>
                  <NavLink exact to ={`/update/${row._id}`}><button className="btn btn-success">update</button></NavLink>
                </td>
                <td>
                 <NavLink exact to ={`/deleteUser/${row._id}`}> <button className="btn btn-danger" onClick= {deleteHandler}>Delete </button></NavLink>
                </td>
  
      
    
          </tr>
        
        
        </>
      )
    })}
   
  
  </tbody>
</table>
</div>
    
    </>
  )
}


export default Table;