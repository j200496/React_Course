import React, { use, useState } from 'react';

const UseStateObj = () => {
  const [studentObj,setStudentObj] = useState({
    name:'Joel',
    city:'Santo Domingo',
    province: 'Santo Domingo'
  })
  const [cityList,setcity] = useState(['Santo Domingo','La Vega','Santiago']);

  const [addcity,setaddcity] = useState("");

  const changeName = (event) => {
   setStudentObj(olObj => ({...olObj,name:event.target.value}));
  }


  const addc = () => {
    setcity(oldobj => [...oldobj,addcity]);
  }

  const changecity = (event) => {
   setaddcity(event.target.value);
  }
    return (
        <div className='container'>
            <p>{JSON.stringify(studentObj)}</p>
            <p>{cityList}</p>
            <div className='row'>
               <div className='col-4'>
              <label>Name</label>
              <input type='text' onChange={(event) => changeName(event)} className='form form-control' />
            </div>
            <div className='col-4'>
              <label>City</label>
              <input type='text' onChange={(event) => changecity(event)} className='form form-control' />
              <button className='btn btn-primary mt-2'onClick={addc} >Add city</button>
            </div>
            </div>
             <div className='row'>  
                 <div className='col-4'>
              <label>State</label>
              <input type='text' className='form form-control' />
            </div>
             </div>
        </div>
    );
};

export default UseStateObj;