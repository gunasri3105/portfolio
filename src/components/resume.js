import ResumeImg from '../assets/resume.png';

export default function Resume() {
    return (
        <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
            <div className='py-5 md:w-1/2 flex justify-end'>
                <img src={ResumeImg} className='w-[400px]' alt='ResumeImg' />
            </div>
            <div className='md:w-full flex justify-center md:justify-center'>
                <div className='flex flex-col  text-white justify-center font-port-font'>
                    <h1 className='text-4xl  border-b-4 border-[white] mb-5 w-[140px] font-bold'>Resume</h1>
                    <p className='pb-4'>You can view my profile <a href='/' className='btn'>Download</a></p>
            </div>
        </div>
        </section >
    )
}