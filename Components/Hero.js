import {
    CloudDownloadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 gap-4 max-w-[1240] m-auto'>
            <div className='flex flex-col justify-center md:items-center w-full px-2 py-8 '>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='text-5xl py-3 md:text-7xl font-bold'>Cloud Manegement</h1>
                <p className='text-2xl '>This is our Tech brand .</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
   <div>
    <img className='w-full ' src='https://media.istockphoto.com/id/1388013584/photo/cloud-computing-technology-concept-transfer-database-to-cloud-there-is-a-large-cloud-icon.webp?s=612x612&w=is&k=20&c=g_9eUz4CNT7_h_aQ2UftKMsv408cr_Vju-EmOCLnKWU=' alt='/'/>
   </div>
   <div className='absolute flex flex-col py-8 md:min-w[760px] bottom-[-5%] md:bottom-[-2%]
    mx-1 md:left-1/2 transform  md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounder-xl text-center  shadow-xl'>
    <p>Data Services</p>
    <div className='flex justify-between flex-wrap  px-4'>
        <p className='flex py-2 px-4 text-slate-500 '>< CloudDownloadIcon className='h-6 text-indigo-600'/> App Security
        <p className='flex py-2 px-4 text-slate-500 '>< DatabaseIcon className='h-6 text-indigo-600'/> Design</p>
        <p className='flex py-2 px-4 text-slate-500 '>< ServerIcon className='h-6 text-indigo-600'/> Data</p>
        <p className='flex py-2 px-4 text-slate-500 '>< PaperAirplaneIcon className='h-6 text-indigo-600'/> API</p>

        </p>
    </div>
   </div>
        </div>
    </div>
  )
}

export default Hero