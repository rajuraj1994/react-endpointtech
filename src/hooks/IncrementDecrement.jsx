import React, { useState } from "react";

const IncrementDecrement = () => {
  const [num, setNum] = useState(1);
  const [name, setName] = useState("Sandesh");
  const [newName, setNewName] = useState("");

  // const addFunction=()=>{
  //     setNum(num+1)
  // }
    const change=(e)=>{
        e.preventDefault()
        setName(newName)
        setNewName('')
    }
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 shadow p-3">
            <h1 className="text-center">{num}</h1>
            {num < 10 && (
              <button
                className="btn btn-primary"
                onClick={() => {
                  setNum(num + 1);
                }}
              >
                ADD
              </button>
            )}
            &nbsp;&nbsp;&nbsp;
            {num > 1 && (
              <button
                className="btn btn-danger"
                onClick={() => {
                  setNum(num - 1);
                }}
              >
                SUB
              </button>
            )}
            <h3>The name of the student is {name}</h3>
            <form onSubmit={change}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={newName}
                className="form-control"onChange={(event)=>{
                    setNewName(event.target.value)
                }}
                required
              />
              <button className="btn btn-warning ">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncrementDecrement;
