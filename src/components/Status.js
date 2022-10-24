import React from 'react'

function Status() {
  return (
    
    <div className='bg-tamu-maroon h-8 w-1/3 mt-12 text-white ml-8'>
      <div className='border-4 border-black'>
       <table className='table-auto center'>
  <tr >
    <th className='pb-2'> IO </th>
    <th className='pb-2'> STATUS </th>
  </tr>
  <tr className='text-black'>
    <td >MOTOR </td>
    <td className='pl-8'> OFFLINE </td>
  </tr>
  <tr className='text-black'>
    <td> TEMPERATURE SENSOR </td>
    <td className='pl-8'> OFFLINE </td>
  </tr>
</table> 

    </div>
    </div>

  )
}

export default Status