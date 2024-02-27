import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';

export default function Project() {
    return (
        <section id='project' className="flex flex-col py-20 px-5 justify-center bg-secondary">
            <div className="w-full">
                <div className='flex flex-col px-10 py-5 font-port-font'>
                <h1 className='text-4xl  border-b-4 border-[black] mb-5 w-[150px] font-bold'>Projects</h1>
                <p>These are my best projects. I have built these with HTML, CSS,Javascript, React.js.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    <div className='relative'>
                        <img src={Project1} className='h-[250px] w-[400px]' alt='Project1' />
                        <div className='project-desc'>
                            <p className='text-center px-10 py-20'>User- friendly BMI calculator by using React.js</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={Project2} className='h-[250px] w-[400px]' alt='Project2' />
                        <div className='project-desc'>
                            <p className='text-center px-10 py-20'>TODO list app by using HTML/CSS, Javascript</p>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={Project3} className='h-[250px] w-[400px]' alt='Project3' />
                        <div className='project-desc'>
                            <p className='text-center px-10 py-20'>Responsive E-Commerce website by using React.js</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}