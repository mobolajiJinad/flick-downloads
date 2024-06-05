import Link from "next/link";
import Image from "next/image";

const infos = [
  { title: "About us", href: "/about" },
  { title: "Contact us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Press", href: "/press" },
];

const categories = [
  { title: "Videos", href: "/videos" },
  { title: "Gaming", href: "/gaming" },
  { title: "Music", href: "/music" },
  { title: "Sports", href: "/sports" },
];

const Information = ({ category }) => {
  return (
    <div className="flex flex-col text-gray-300">
      {category
        ? categories.map((info) => (
            <Link
              href={info?.href}
              key={info.title}
              className="group mb-1 flex cursor-pointer items-center gap-x-3 border-b border-b-[#222] py-1 text-sm duration-200 hover:text-white"
            >
              <span className="inline-flex h-2 w-2 rounded-full border border-red-700 duration-200 group-hover:bg-red-700"></span>
              {info?.title}
            </Link>
          ))
        : infos.map((info) => (
            <Link
              href={info?.href}
              key={info.title}
              className="group mb-1 flex cursor-pointer items-center gap-x-3 border-b border-b-[#222] py-1 text-sm duration-200 hover:text-white"
            >
              <span className="inline-flex h-2 w-2 rounded-full border border-red-700 duration-200 group-hover:bg-red-700"></span>
              {info?.title}
            </Link>
          ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="grid grid-cols-1 gap-10 bg-[#191919] px-10 py-20 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <h2 className="relative mb-5 border-b border-b-gray-600 py-2 text-base font-bold uppercase tracking-wide text-white">
          About us{" "}
          <span className="absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600"></span>
        </h2>
        <Link href={"/"}>
          <Image
            src="/next.svg"
            alt="Logo"
            width={120}
            height={100}
            priority={true}
            className="h-auto w-40 cursor-pointer"
          />
        </Link>
        <p className="mt-5 max-w-72 text-sm leading-6 tracking-wide text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sunt
          et quasi repudiandae, quos voluptas aliquam, assumenda unde vitae
          dicta dolores? Tenetur rem ullam obcaecati dolore, commodi aperiam
          eligendi quas.
        </p>
      </div>

      <div>
        <h2 className="relative mb-5 border-b border-b-gray-600 py-2 text-base font-bold uppercase tracking-wide text-white">
          information{" "}
          <span className="absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600"></span>
        </h2>
        <Information category={false} />
      </div>

      <div>
        <h2 className="relative mb-5 border-b border-b-gray-600 py-2 text-base font-bold uppercase tracking-wide text-white">
          Category{" "}
          <span className="absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600"></span>
        </h2>
        <Information category={true} />
      </div>

      <div>
        <h2 className="relative mb-5 border-b border-b-gray-600 py-2 text-base font-bold uppercase tracking-wide text-white">
          Connect with us{" "}
          <span className="absolute -bottom-[1.5px] left-0 z-10 inline-block h-1 w-16 bg-red-600"></span>
        </h2>
        <div className="flex flex-col gap-2 text-sm text-gray-300">
          <p>
            Phone : <span className="font-medium text-white">012 345 678</span>
          </p>
          <p>
            Email :{" "}
            <span className="font-medium text-white">abcdefghi@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
