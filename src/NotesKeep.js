import React, { useState } from 'react'
import './NotesKeep.css'

const NotesKeep = () => {
  const [input, setinput] = useState('')
  const [inputArray, setinputArray] = useState([])

  let handleInput = (event) => {
    setinput(event.target.value)
  }

  let handleOnAddNotes = () => {
    setinputArray([...inputArray, input])
    setinput('')
  }

  let handleOnDeleteOne = (index) => {
    let filtered = inputArray.filter((element, index2) => {
      return index !== index2
    })
    setinputArray(filtered)
  }

  let handleOnClearAll = () => {
    setinputArray([])
  }

  return (
    <div className='containers my-5'>
      <div style={{display:'flex' ,justifyContent:'center',alignItems:'center', margin:'15px 0px' }}>
      <img src="https://m.media-amazon.com/images/I/5141PPfYmPL.png" className='img' style={{padding:'0px 10px'}} alt="" />
      <h1 className='text-center' style={{padding:'0px 10px', color:'white'}}>To Do List</h1>
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Text Hear....' value={input} onChange={handleInput} style={{backgroundColor:'rgb(31, 31, 56)', color:'white'}}></textarea>
        <button type="button" className="btn btn-primary my-2" onClick={handleOnAddNotes} disabled={!input ? true : false}>Add Notes</button>
      </div>
      <div style={{ display: 'inline-block', alignItems: 'center' }}>
        {inputArray.map((value, index) => {
          return <p style={{ border: '0.1rem solid grey', borderRadius: '15px', padding: '10px' , color:'gray'}} key={index}>
            {value}
            <br />
            {/* <button type="button" className="btn btn-sm  btn-warning mx-2" onClick={() => { handleOnEdit(index) }}>Edit</button> */}
            <button type="button" className="btn  btn-sm btn-danger mx-2" onClick={() => { handleOnDeleteOne(index) }} >Delete</button>
          </p>
        })
        }
        {inputArray.length >= 2 && <button type="button" className="btn btn-danger" onClick={handleOnClearAll} >Clear All</button>}
      </div>
    </div >
  )
}

export default NotesKeep;