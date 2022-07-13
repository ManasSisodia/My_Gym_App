import React from 'react'
import { useState } from 'react';
import { bmioptions } from '../utils/fetchData';
import { fetchData } from '../utils/fetchData';
const Bmi = () => {
    const [bmid,setbmi] = useState([]);
    const [done,setdone] = useState(false);
    const handleClick = e =>{
        e.preventDefault();
        const forms = document.getElementById('form-id');
        const user_height = forms[0].value;
        const user_weight = forms[1].value;
        const user_age = forms[2].value;
        const bmiUrl = 'https://fitness-calculator.p.rapidapi.com/bmi';

       fetchData(`${bmiUrl}?age=${user_age}&height=${user_height}&weight=${user_weight}`, bmioptions).then((response) => {
        setbmi(response);
        setdone(true);
        console.log(bmid);
      })
    }
  return (
    <div>
        <form id="form-id" onSubmit={handleClick}>
            <div className='option'> HEIGHT(in cms) : <br/><input type="number" min="130" max="230" placeholder='i.e. 130-260' required/></div>
            <div className='option'> WEIGHT(in kgs) :  <br/><input type="number" min="40" max="160" placeholder='i.e. 40-160' required/></div>
            <div className='option'> AGE : <br/><input type="number" min="0" max="80" placeholder='i.e. 10-80' required/></div>

            <button>Submit</button>

        {done && <div className='res-block'>
            <div className='res'> Your Body Mass Index is &nbsp;<span style={{ color: '#FF2625', textTransform: 'capitalize'}}>{bmid.data.bmi}</span></div>
            <div className='res'> You are in the &nbsp;<span style={{ color: '#FF2625', textTransform: 'capitalize'}}>{bmid.data.health} &nbsp;</span>Category</div>
            <div className='res'> Healthy Bmi ranges from : &nbsp;<span style={{ color: '#FF2625', textTransform: 'capitalize'}}>{bmid.data.healthy_bmi_range} </span></div>
        </div>}
        </form>
    </div>
  )
}

export default Bmi