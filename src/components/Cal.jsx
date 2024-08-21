import { Result } from 'postcss';
import React, { useState } from 'react'

const Cal = () => {
    const[res,setRes]=useState('');
    const clickHandle = (e) =>{
        setRes(res.concat(e.target.value));
    }
    const clearScreen = () =>{
        setRes("");
    }
    const calc = () => {
        setRes(eval(res).toString());
    }
  return (
    <div className='bg-gray-800 text-white h-screen w-screen flex justify-center items-center'>
      <div className='main w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-100'>
        <div className='screen p-2 rounded-lg'>
            <input type="text" value={res} className='text-black w-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] placeholder-black px-1  outline-none text-right text-2xl pt-10 bg-gray-100 ' placeholder='0' />
        </div>
        <div className='brand bg-gray-200 bg-opacity-90 mb-2'>
            <h1 className='text-gray-900 text-xs font-bold text-center'>Deva</h1>

        </div>
        <div className='keyboard '></div>
        <div className='flex justify-between m-2'>
            <input type="button" onClick={clearScreen} value="C" className='bg-red-300 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="<" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="%" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="/" className='bg-pink-300 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />

        </div>
        <div className='flex justify-between m-2'>
            <input type="button" onClick={clickHandle} value="7" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="8" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="9" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="*" className='bg-green-300 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />

        </div>
        <div className='flex justify-between m-2'>
            <input type="button" onClick={clickHandle} value="4" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="5" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="6" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="-" className='bg-blue-300 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />

        </div>
        <div className='flex justify-between m-2'>
            <input type="button" onClick={clickHandle} value="1" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="2" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="3" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="+" className='bg-purple-300 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />

        </div>
        <div className='flex justify-between m-2'>
            <input type="button" onClick={clickHandle} value="0" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="00" className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={clickHandle} value="." className='bg-gray-200 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />
            <input type="button" onClick={calc}  value="=" className='bg-yellow-300 shadow w-12 h-12 rounded-lg text-black text-center font-medium' />

        </div>


      </div>
    </div>
  )
}

export default Cal
