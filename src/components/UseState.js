import React, { useState } from 'react';

const UseState = () => {
    let CourseName = 'React';
    const [CourseDuration,setcoursename] = useState("2 months");
    const [CourseNumber,setcoursenumber] = useState(123);
    const [isActive, setIsActive] = useState(false);
    const [currentDate,SetCurrentDate] = useState(new Date());

    const [student,SetStudent] = useState({name:'Jhon',age:35,city:'Santo Domingo'});
    const [cityList,SetcityList] = useState('Santiago','La Vega','Santo Domingo');

   
    const changeCnumber = (event) => {
     setcoursenumber(event.target.value);
    }   
    const changename = () => {
        CourseName = 'Angular';
    }
    const onchangeduration = () => {
    setcoursename('Angular');
    }
    const onchangecheck = (event) =>{
        setIsActive(event.target.checked);
    }
    return (
        <div>
           <div className='row'>
            <input type='checkbox' onChange={(event)=>onchangecheck(event)}/>
            <p>{isActive ? 'Checked' : 'Unchecked'}</p>
              <div className='col-3'>
              <p>{CourseName}</p>
           </div>
           </div>
           <div className='row'>
              <div className='col-3'>
              <p>{CourseDuration}</p>
           </div>
           <div className='col-3'>
              <p>{CourseNumber}</p>
           </div>
           </div>
            <div className='row'>
              <div className='col-3'>
             <button onClick={changename} className='btn btn-primary'>Change course name</button>
           </div>
            <div className='col-3'>
             <button onClick={onchangeduration} className='btn btn-danger'>Change course duration</button>
           </div>
           <div className='col-3'>
           <input type='text' onChange={(event) => changeCnumber(event)}/>
           </div>
           </div>
        </div>
    );
};

export default UseState;