import AboutImg from '../assets/about.png'

export default function About() {
    return (
        <section id='about' className='flex flex-col md:flex-row bg-primary px-5'>
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt='AboutImg' />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col  text-white justify-center font-port-font'>
                    <h1 className='text-4xl  border-b-4 border-[white] mb-5 w-[180px] font-bold'>About Me</h1>
                    <p className='pb-4'>Hello, This is Gunasri Selvaraj. I am a Front-End Developer.
                     I create responsive, user-friendly and beautiful websites by using TAILWIND CSS, REACT.JS.</p>
                    <p className='pb-4'> I am proficient in front-end skills like HTML, CSS3, JAVASCRIPT, REACT.JS,
                    TAILWIND CSS and etc,.</p>
                    <p>I belive to Become a Full Stack Developer at soon.</p>
            </div>
        </div>
        </section >
    )
}