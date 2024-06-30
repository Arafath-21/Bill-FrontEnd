function WelcomeText({ title, description }) {
  return (
    <div className="grow space-y-2 px-4 py-4 sm:flex sm:flex-col  sm:items-center ">
      <h1 className="text-4xl  font-bold tracking-widest">{title}</h1>
      <p className="font-semibold "> {description}</p>
    </div>
  );
}

export default WelcomeText;
