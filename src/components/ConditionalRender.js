import React, { useState } from 'react';

const ConditionalRender = () => {
  
    const [Isactive,setActive] = useState(false);

     
    const ChangeColor = () => {
        setActive(true);
    }
        const ChangeColor1 = () => {
        setActive(false);
    }
    const changewtoglle = () => {
        setActive(!Isactive)
    }
    return (
        <div>
            <div>
                <div class="mt-2 p-3 bg bg-secondary text-white">
                     <h1>Conditional Rendering</h1>
                </div>
                <div class="row pt-3">
                <div class="col-3">
                     {
                        Isactive &&    <div class="bg-danger p-3 text-center">
                        <h4>Div1</h4>
                    </div>
                     }
                    </div>
                      <div class="col-3 d-flex gap-2">
                          <button className='btn btn-danger mt-2' onClick={ChangeColor1}>Hide</button>
                     <button className='btn btn-primary mt-2' onClick={ChangeColor}>Show</button>
                      </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <button className='btn btn-secondary mt-2' onClick={changewtoglle}>Toggle</button>
                </div>
            </div>
        </div>
    );
};

export default ConditionalRender;