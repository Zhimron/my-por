import './index.css';
import { navlinks } from './navlist';

const Navlink = () => {
  return (
    <div className="w-full h-[70px] px-6 py-5 shadow-xl bg-opacity-50">
      <div className="flex justify-between">
        <div className="text-[#4b5fc2] text-[25px] font-bold">
          <h1>ZHIM</h1>
        </div>
        <div className="text-[20px] text-[#4b5fc2]">
          <ul>
            {navlinks.map((link) => (
              <li key={link.title} className="hover:drop-shadow-lg">
                <a href={link.id}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navlink;
