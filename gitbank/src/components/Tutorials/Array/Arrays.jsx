import React from 'react'
import ArrayChild from './ArrayChild';
import './myStyles.css';

 function Arrays() {

   const Name = ["Hiren","Yash"]
   const Age = [{
                    
                    id:1,
                    age: '18'
                },
                {
                    id:2,
                    age:'19'
                }]

  return (
    <div>
        {/* FIRST METHOD IS TO USE THE ARRAY'S INDEX */}
        <div>
            <h1 className='primary'>{Name[0]}</h1>
            <h1>{Name[1]}</h1>
        </div>

        {/* SECOND MEHOD IS TO USE THE ARRAYS MAP METHOD */}
        {/* FUNCTION IS PASSED AS THE MAP'S PARAMETER */}
        <div>
            {
                  Age.map(Age => <ArrayChild key={Age.id} Age={Age}/>)
            }
        </div>
    </div>
  )
}
export default Arrays;

     