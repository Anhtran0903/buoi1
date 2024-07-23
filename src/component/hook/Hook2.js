import React, { useState } from 'react';

function Hook2(props) {

    const [student,setStudent]=useState({name:"",age:0})
    return (
        <div>
            <h1>em ten la {student.name}, {student.age} tuoi</h1>

        <form>

            <input type='text' placeholder='nhap ten' value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})}/>
            <input type='text' placeholder='nhap tuoi ' value={student.age} onChange={(e)=>setStudent({...student,age:e.target.value})}/>

        </form>
        </div>
    );
}

export default Hook2;