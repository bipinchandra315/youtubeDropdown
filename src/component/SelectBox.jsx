import React, { useState } from "react"


const SelectBox = ({ data, btnName,setoptions}) => {
const [option, setoption] = useState("")
const handleOptions=(d)=>{
  setoptions(d)
  setoption(d)
}
  return (
      <>
      <div class="dropdown dropend">
      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
        { option?option:btnName  }<i class="fas fa-chevron-down px-1"></i>
      </button>
        <ul class="dropdown-menu">
          {
            data.map((d, idx) => <li key={idx} onClick={()=>handleOptions(d)} ><a class="dropdown-item" href="#">{d}</a></li>)
          }
        </ul>
      </div>
</>
  )
}

export default SelectBox