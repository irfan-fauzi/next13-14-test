import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-fuchsia-300 mb-10 sticky w-[100%] top-0 left-0">
      <div className="container mx-auto h-[80px] flex gap-5 justify-between items-center px-2">
        <h1 className="text-4xl hover:text-gray-100">
          <Link href="/">Home Page</Link>
        </h1>
        <ul className="flex gap-5 items-center">
          <li className="hover:text-gray-100">
            <Link href="/galery">Galery</Link>
          </li>
          <li className="hover:text-gray-100">
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
