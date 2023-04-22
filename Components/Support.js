import {PhoneIcon , ArrowSmRightIcon , AcademicCapIcon} from '@heroicons/react/outline'
import { ChipIcon , SupportIcon} from '@heroicons/react/solid'
const Support = () => {
  return (
    <div className='w-full h-screen relative mt-24 '>
        <div className='w-full h-[700px] bg-gray-900/80 absolute'>
            <img  className='w-full h-full object-cover mix-blend-overlay' src='https://images.pexels.com/photos/7709284/pexels-photo-7709284.jpeg?auto=compress&cs=tinysrgb&w=400' alt='/'/>
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative '>
            <div className='px-4 py-12'>
                <h1 className='pt-8 text-slate-300 uppercase text-center font-bold'>Support</h1>
                <h2 className='font-bold text-5xl my-5 py-3 text-center'>Finding the Right Team</h2>
                <p className='py-4 text-3xl text-slate-300 '> In publishing and graphic design, Lorem ipsum is
                     a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-col-3 relative gap-x-8 gap-y-16 px-4 mt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl '>
                    <div className='p-8'>
                        <PhoneIcon className='bg-indigo-600 text-white w-16 rounded-lg mt-[-50px] h-[50px]'/>
                        <h2 className='p-8 font-bold text-2xl '>Sales</h2>
                        <p className='text-gray-600 font-bold text-xl'>In publishing and graphic design, Lorem ipsum is a placeholder 
                            text commonly used to demonstrate
                             the visual form of a document or a typeface
                              without relying on meaningful content.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 '>
                        <p className='flex items-center text-indigo-600 font-bold '>Constact Us<ArrowSmRightIcon className='h-20 ml-2 w-8'/> </p>
                    </div>
                    <div className='p-8'>
                        <SupportIcon className='bg-indigo-600 text-white w-16 rounded-lg mt-[-50px] h-[50px]'/>
                        <h2 className='p-8 font-bold text-2xl '>Technical Suppport</h2>
                        <p className='text-gray-600 font-bold text-xl'>In publishing and graphic design, Lorem ipsum is a placeholder 
                            text commonly used to demonstrate
                             the visual form of a document or a typeface
                              without relying on meaningful content.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 '>
                        <p className='flex items-center text-indigo-600 font-bold '>Constact Us<ArrowSmRightIcon className='h-20 ml-2 w-8'/> </p>
                    </div>
                    <div className='p-8'>
                        <ChipIcon className='bg-indigo-600 text-white w-16 rounded-lg mt-[-50px] h-[50px]'/>
                        <h2 className='p-8 font-bold text-2xl '>Media Enquiries</h2>
                        <p className='text-gray-600 font-bold text-xl'>In publishing and graphic design, Lorem ipsum is a placeholder 
                            text commonly used to demonstrate
                             the visual form of a document or a typeface
                              without relying on meaningful content.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 '>
                        <p className='flex items-center text-indigo-600 font-bold '>Constact Us<ArrowSmRightIcon className='h-20 ml-2 w-8'/> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support