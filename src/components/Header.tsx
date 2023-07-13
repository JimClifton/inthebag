import { MdGolfCourse } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-800 py-4 mb-8">
      <div className="container mx-auto px-5 flex justify-between">
        <div className="flex">
          <a href="/" className="text-white flex items-center text-3xl mt-1">
            <MdGolfCourse className="mr-3" />
            In The Bag
          </a>
        </div>
        <div className="flex justify-end">
          <button className="inline-flex rounded-lg text-sm font-semibold p-3 bg-slate-600 text-white">
            <Link to="admin">ADMIN</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
