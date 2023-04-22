import {CheckIcon} from '@heroicons/react/outline'

const AllinOne = () => {
  return (
    <div className='w-full mt-[80%] '>
        <div className='max-w-[1240px] mx-auto px-2 '>
            <h2 className='text-5xl font-bold text-center '>All-In-One Platform</h2>
            <p>Lorem n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                 or a typeface without relying on meaningful content.</p>
                 <div>
                    <div>
                        <div>
                       <CheckIcon className='w-7 mr-4 text-green-600'/>
                        </div>
                        <h3>Notification</h3>
                        <p>n publishing and graphic design,
                             Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                             or a typeface without relying on meaningful content.</p>
                    </div>
                 </div>
        </div>
    </div>
  )
}

export default AllinOne