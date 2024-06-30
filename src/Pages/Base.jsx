import LogoTop from '../Ui/LogoTop';
import WelcomeText from '../Ui/WelcomeText';
import Illustartion from '../Assets/Statistics.svg';

function Base({ title, description, children }) {
  return (
    <div className="flex flex-col gap-4 md:gap-2 lg:gap-0 md:flex-row min-h-screen max-w-full ">
      <div className="flex lg:w-1/2 flex-col bg-blue-700 text-slate-300">
        <LogoTop />
        <div className='h-64 w-64 md:h-96 md:w-96 mx-auto'>
          <img src={Illustartion} alt="logo" />
        </div>
        <WelcomeText title={title} description={description} />
      </div>
      <div className="flex lg:w-1/2 items-center justify-center ">{children}</div>
    </div>
  );
}

export default Base;
