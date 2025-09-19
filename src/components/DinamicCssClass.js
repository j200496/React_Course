import React, { useState } from 'react';

const DinamicCssClass = () => {

    const [div1Color,setDiv1] = useState("yellow");
    const [textColor,settextcolor] = useState("");
    const Addiv1Color = (color)=>{
        setDiv1(color);
    }

    const ChangeTextColor = (color) => {
       settextcolor(color);
    }
    return (
        <div>
            <div class="row justify-content-center">
                <div class="col-6">
                    <h2>Dinamic Css Styles and Class</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="p-3 text-center" style={{'background-color':div1Color, 'color': textColor}}>
                      <h4>Div1</h4>
                    </div>
                    <div class="d-flex gap-2 justify-content-center mt-2">
                        <button className='btn btn-danger' onClick={()=> Addiv1Color('red')}>Red</button>
                        <button className='btn btn-primary' onClick={() => Addiv1Color('blue')} >Blue</button>
                        <button className='btn btn-primary' onClick={() => ChangeTextColor('white')} >Text white</button>
                        <button className='btn btn-primary' onClick={() => ChangeTextColor('black')} >Text Black</button>
                    </div>
                </div>
                <div class="col-4"></div>
                <div class="col-4"></div>
            </div>
        </div>
    );
};

export default DinamicCssClass;