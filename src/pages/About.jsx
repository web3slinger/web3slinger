import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col justify-between flex-shrink w-full max-w-full min-w-0 height'>
        <div className='container flex flex-col p-4 pl-2 mx-auto overflow-hidden lg:flex-row'>
          <div className='flex-shrink-0 lg:w-96'>
            <div className='relative w-full mb-6 bg-white border border-gray-200 shadow-md rounded-xl'>
              <div className='flex justify-center p-1.5 text-xs'>
                spidey #1
              </div>
              <img
                className='shadow-md rounded-b-xl'
                src='src/assets/smol-spider.jpeg'
                alt='Smol Spider-Man'
              />
            </div>
          </div>
          <div className='relative flex flex-col items-start flex-shrink w-full min-w-0 ml-0 lg:ml-6'>
            <h1 className='text-4xl font-medium'>Patrick Torralba</h1>
            <p className='text-2xl text-slate-500'>I build things for the web.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
