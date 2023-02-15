import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Adduser= ()=>{

  const navigate = useNavigate();
  const [studentName, setStudentName]= useState("");
  const [maths, setMaths] = useState();
  const [science, setScience] = useState();
  const [english, setEnglish] = useState();
  const [hindi, setHindi] = useState();
  const [marathi, setMarathi] = useState();










    const total = ()=>{



      return(

        (parseInt(maths)+parseInt(science)+parseInt(english)+parseInt(hindi)+parseInt(marathi))

      )
    }


    const percentage = ()=>{

      return(
        ((total()/500)*100)
      )
    }


    const grade = ()=>{

      

        if(percentage()<=35){
          return "C"
        }
        else if(percentage ()>35 && percentage()<75){
          return "B"
        }
        else {
          return "A"
        }

    }

    
    







  const submitHandler =(e)=>{
    e.preventDefault();

    const newData ={
    studentName, 
    maths, 
    science,
    english,
    hindi,
    marathi,
    total:total(),
    per:percentage(),
    Grade:grade()
    }

    // console.log(newData);
    axios.post("http://localhost:8000/",newData).then(res=>{
      console.log(res.data);
    });

    alert('user added successfully');
    navigate("/")
  }
  return (
    <>
    <div className="col d-flex justify-content-center mt-5">
        <h1>Add Student Marks</h1>
      </div>
    <div className="container-sm">
    <form class="row g-3 mt-5" onSubmit={submitHandler} enctype="multipart/form-data">
  <div class="col-md-8 margin">
    <label  class="form-label">Student Name</label>
    <input type="text" class="form-control" onChange={(e)=> setStudentName(e.target.value) } value={studentName} required />
  </div>


 
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
  
  <div class="col-md-6">
    <label  class="form-label">Total</label>
    <input type="number" class="form-control"  value={total()} required />
  </div>
  
  <div class="col-md-6">
    <label  class="form-label">Percentage</label>
    <input type="number" class="form-control"  value={percentage()} required />
  </div>
  
  <div class="col-md-6">
    <label  class="form-label">Grade</label>
    <input type="text" class="form-control" value={grade()} required />
  </div>
  


  
  <div class="col-12">
  <button class="btn btn-primary" type="submit">Add Student Marks</button>
  </div>
</form>
</div>
    </>
  );
}

export default Adduser;
