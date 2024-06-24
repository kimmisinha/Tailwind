import React from 'react'

function Tailwind() {
  return (
    <div className="bg-black">
        <h3 className=' text-red-700 grid place-content-center h-screen'>Tailwind</h3>
        <div className=''>
            <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center 
             space-x-4'>

            <div>
                <img className="h-12 w-12"src="https://akm-img-a-in.tosshub.com/aajtak/images/story/201605/pwd_146293901026_650x425_051116092730.jpg" alt="broken-image"/>
            </div>
            <div>
                <div className='text-xl font-medium text-black'>
                    Tailwind css
                    <p className='text-slate-400 text-base'> by kimmi</p>
                </div>
            </div>
            <button className='bg-sky-600 text-center mx-5 mt-3 text-white text-base p-2 rounded-lg hover:bg-blue-600 hover:text-yellow-200 dark:bg-red-700 ml-5'>Buy Now</button>

            </div>

        </div>

    </div>

  )
}

export default Tailwind