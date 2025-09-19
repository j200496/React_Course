import React from 'react';

const EventBinding = () => {

    const ShowAlert = () => {
        alert('Welcome to React');
    }

    const ShowMessage = (msg) =>{
    alert(msg)
    }
   const onCityChange = () => {
alert('city change');
   }
      const onTextChange = () => {
alert('Text change');
   }
 const onNameChange = (event) => {
debugger;
console.log(event.target.value)
   }
    return (
        <div>
            <div className="row justify-content-center mt-4">
                <div className="col-10">
                    <button className='btn btn-info text-white' onClick={ShowAlert}>Show Alert</button>
             <button className='btn btn-info text-white' onClick={() => ShowMessage('Hello') }>Show msg</button>
                </div>
            </div>
             <select onChange={onCityChange}>
                <option>Santo Domingo</option>
                <option>Santiago</option>
                <option>La Vega</option>
             </select>
             <input type='text' onChange={onTextChange}/>
             <br></br>
               <input type='text' onChange={(event) =>onNameChange(event)}/>
        </div>
    );
};

export default EventBinding;