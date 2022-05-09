import {
    SearchIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
  } from "@heroicons/react/outline";
  import { HomeIcon } from "@heroicons/react/solid";
  
  function Header({ user, setUser }) {
  
    return (
        <div className="shadow-md border-b bg-white sticky top-0 p-3 z-50 ">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto ">
                {/*LeftSide*/}
  
                <div className="relative hidden lg:inline-grid  w-24 cursor-pointer items-center justify-center">
                    <a href="/">
                        <img
                            className="flex items-center justify-center top-5"
                            src="https://links.papareact.com/ocw"
                            layout="fill"
                            alt=""
                            objectFit="contain"
                        />
                    </a>
                </div>
  
                <div className=" relative w-10  lg:hidden flex-shrink-0 cursor-pointer flex items-center justify-center">
                    <a href="/">
                        <img
                            src="https://links.papareact.com/jjm"
                            layout="fill"
                            objectFit="contain"
                            alt=""
                        />
                    </a>
                </div>             
            </div>
        </div>
    );
  }
  
  export default Header;
  