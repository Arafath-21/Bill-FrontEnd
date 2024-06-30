import { Link } from 'react-router-dom';
import hero2 from '../../Assets/hero2.jpg';
import { Link as Scroll } from 'react-scroll';

function Hero() {
  return (
    <section
      id="hero"
      className=" grid min-h-screen  grid-cols-1   text-slate-200"
    >
      <div class="group-hover:from=gray-50 absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-gradient-to-br from-transparent to-black group-hover:to-white group-hover:opacity-70">
        <nav className="fixed left-0 right-0 top-0 z-50 h-14 bg-slate-300 bg-opacity-80  ">
          <ul className="flex items-center justify-between px-6 py-2 text-green-600">
            <div>
              <Scroll
                className="cursor-pointer font-bold tracking-wide"
                to="hero"
                spy={true}
                smooth={true}
                offset={-10}
                duration={600}
              >
                GloBill
              </Scroll>
            </div>
            <div className="flex  text-sm font-semibold sm:gap-8 md:gap-16">
              <Scroll
                className="cursor-pointer"
                to="features"
                spy={true}
                smooth={true}
                offset={-10}
                duration={600}
              >
                Features
              </Scroll>
              <Scroll
                className="cursor-pointer"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Testimonials
              </Scroll>
              <Scroll
                className="cursor-pointer"
                to="pricing"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Pricing
              </Scroll>
              <Scroll
                className="cursor-pointer"
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Contact
              </Scroll>
            </div>
            <li>
              <Link to="/login">
                <button className="rounded-2xl bg-blue-600 px-6 py-2 text-sm font-bold text-slate-100 duration-300 hover:scale-105">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className=" text-center ">
          <h1 className="mx-auto  max-w-3xl text-6xl font-bold capitalize tracking-wider text-blue-100">
            Streamline Your Inventory with GloBill
          </h1>
          <h3 className="mt-3 text-2xl font-semibold ">
            {' '}
            Glow Your Business With Our Inventory Management Software!
          </h3>
          <p className="mt-2">
            {' '}
            Simplify your invoicing process, track payments effortlessly, and
            optimize your financial management{' '}
          </p>
          <Link to="/signup">
            <button className="mt-14 rounded-2xl bg-blue-600 px-8 py-3 text-sm font-bold duration-300 hover:scale-105">
              Start Your Free Trial
            </button>
          </Link>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${hero2})` }}
        className="flex items-center justify-center bg-cover bg-center text-center bg-blend-multiply"
      ></div>
    </section>
  );
}

export default Hero;
