import HeroImg from "../assets/hero.png";
import { AiFillTwitterCircle, AiFillFacebook, AiFillInstagram} from "react-icons/ai";

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center">
            <div className="md:w-1/2 flex flex-col">
            <h1 className="text-5xl font-port-font">Hi,<br/>I am Gunasri Selvaraj
            <p className="text-2xl">I'm Front-End Developer</p></h1>
            <div className="flex py-7">
            <a href="/" className="pr-5 hover:text-orange-600"><AiFillInstagram size={40}/></a>
            <a href="/" className="pr-5 hover:text-orange-600"><AiFillFacebook size={40}/></a>
            <a href="/" className="hover:text-orange-600"><AiFillTwitterCircle size={40}/></a>  
            </div>
            </div>
            <img className="md:w-1/3" alt="heroimg" src={HeroImg} />
        </section>
    )
}