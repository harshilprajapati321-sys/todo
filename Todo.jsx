import React, { useState } from 'react'

export default function Todo() {
  const [text, settext] = useState('');
  const [state, setState] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    settext(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (editIndex !== null) {
      state[editIndex] = text
      setState([...state])
      setEditIndex(null)
    } else {
      setState([...state, text])
    }
    settext('')
  }

  function Delete(id) {
    let ans = state.filter((el, i) => i !== id)
    setState(ans)
  }

  function Edit(id) {
    settext(state[id])
    setEditIndex(id)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          placeholder="enter name" 
          value={text} 
          onChange={handleChange}
          style={{ padding: "10px", width: "200px", marginRight: "10px" }}
        />
        <input 
          type="submit"
          value={editIndex !== null ? "Update" : "Add"}
          style={{ padding: "10px 15px", backgroundColor: "green", color: "white", border: "none" }}
        />
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {
          state.map((el, i) => {
            return (
              <li key={i} style={{ marginBottom: "10px" }}>
                <span style={{ marginRight: "10px", fontWeight: "bold" }}>{el}</span>

                <button 
                  onClick={() => Delete(i)}
                  style={{ marginRight: "5px", backgroundColor: "red", color: "white", border: "none", padding: "5px 10px" }}
                >
                  Delete
                </button>

                <button 
                  onClick={() => Edit(i)}
                  style={{ backgroundColor: "blue", color: "white", border: "none", padding: "5px 10px" }}
                >
                  Edit
                </button>
              </li>
            )
          })
        }
      </ul>

    </div>
  )
}