import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type,onClick,action }) {
  const base = `text-sm inline-block rounded-lg bg-blue-600 
  font-semibold uppercase tracking-wide text-stone-200
 transition-colors duration-300 hover:bg-blue-800
 focus:bg-blue-300
 focus:outline-none focus:ring focus:ring-blue-300 
 focus:ring-offset-2 disabled:cursor-not-allowed 
 `;

  const styles = {
    primary: base + 'text-sm px-4 py-1 md:px-6 md:py-2',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:`inline-block rounded-full border-2 border-stone-300 
    px-4 py-2.5 md:px-6 md:py-3.5
    font-semibold uppercase tracking-wide text-stone-400
   transition-colors duration-300 hover:bg-stone-400
   focus:bg-stone-400 hover:text-stone-800 focus:text-stone-800
   focus:outline-none focus:ring focus:ring-stone-300 
   focus:ring-offset-2 disabled:cursor-not-allowed`,
   round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm'
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );


    if(onClick){
      return  <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
    }
  return (
    <button type={action} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
