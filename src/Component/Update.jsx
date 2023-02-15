import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const Update = () => {

        const {userId} = useParams();
const navigate  = useNavigate();
    const [maths, setMaths] = useState();
    const [science, setScience] = useState();
    const [english, setEnglish] = useState();
    const [hindi, setHindi] = useState();
    const [marathi, setMarathi] = useState();


    useEffect(() => {
          
      axios.get(`http://localhost:8000/user/${userId}`)   
      
        .then(async(res)=>{
                    
            const data = await res.data[0]
            console.log(data);

            setMaths(data.maths);
            setScience(data.science);
            setEnglish(data.english);
            setHindi(data.hindi);
            setMarathi(data.marathi);
        })
        .catch(()=>{
            console.log("err")
        })

          
    },[] )



    const updateHandler = (e)=>{
        e.preventDefault();


      const  myobj= {
            maths,
            science,
            english,
            hindi,
            marathi




        }
        axios.put(`http://localhost:8000/user/${userId}`,myobj)
        .then(()=>{
            alert("data update")
            navigate("/")
        })
        


    }


  return (
    
    <>
    
    <form action="" onSubmit={updateHandler}>
    <div class="col-md-6">
    <label  class="form-label">Mathamathics Subject Marks</label>
    <input type="number" class="form-control" onChange={(e)=> setMaths(e.target.value) } value={maths} required/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">Science Subject Marks</label>
    <input type="number" class="form-control" onChange={(e)=> setScience(e.target.value) } value={science} required/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">English Subject Marks</label>
    <input type="number" class="form-control" onChange={(e)=> setEnglish(e.target.value) } value={english} required/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">Hindi Subject Marks</label>
    <input type="number" class="form-control" onChange={(e)=> setHindi(e.target.value) } value={hindi} required/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">Marathi Subject Marks</label>
    <input type="number" class="form-control" onChange={(e)=> setMarathi(e.target.value) } value={marathi} required />
  </div>
  


  
  <div class="col-12">
  <button class="btn btn-primary" type="submit"> Update Marks</button>
  </div>
    </form>
    
    
    </>

  )
}

export default Update;
