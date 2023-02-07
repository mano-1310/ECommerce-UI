import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";

const socialmedias = [
  {
    link: "https://www.instagram.com/jixlox.jpg",
    name: "Instagram",
    icon: AiFillInstagram,
  },
  {
    link: "https://twitter.com/man0_1310",
    name: "Twitter",
    icon: AiFillTwitterCircle,
  },
  {
    link: "https://github.com/mano-1310",
    name: "GitHub",
    icon: AiFillGithub,
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="min-h-[100px] text-black">
        <div className="flex justify-end">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="p-3"
          >
            Scroll to Top
          </button>
        </div>
        <div className="flex lg:text-1xl sm:text-sm  justify-center items-center">
          &copy; 2023 E Fashion, Inc. All rights reserved.
        </div>
        <div className="gap-5 flex justify-center py-4 cursor-pointer">
          {socialmedias.map((sm) => (
            <div  key={sm.name} onClick={() => window.open(sm.link, "_blank")}>
              <span className="sr-only">{sm.name}</span>
              <sm.icon className="h-7 w-7" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
