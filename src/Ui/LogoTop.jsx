import { Link } from 'react-router-dom';

function LogoTop() {
  return (
    <div className="px-6 py-8 text-slate-300">
      <div>
        <Link to="/">
          <p className="mt-1 pl-4 text-xl font-semibold">Globill</p>
        </Link>
      </div>
    </div>
  );
}

export default LogoTop;
