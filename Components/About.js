
const About = () => {
  return (
    <div className="w-full my-32 ">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Trusted by devolopers across the world</h2>
          <p className="text-3xl py-6 ">In publishing and graphic design, Lorem ipsum is a placeholder
             text commonly used to demonstrate the visual form of a document
             or a typeface without relying on meaningful content.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl"> 
          <p className="font-bold text-6xl text-indigo-600">100%</p>
          <p className="text-gray-400 mt-2">Completion</p>
        </div>
        <div className="border py-8 rounded-xl shadow-xl">
          <p className="font-bold text-6xl text-indigo-600">27/7</p>
          <p className="text-gray-400 mt-2">Delevery</p>
        </div>
        <div className="border py-8 rounded-xl shadow-xl">
          <p className="font-bold text-6xl text-indigo-600">100k</p>
          <p className="text-gray-400 mt-2">Transction Complited</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About