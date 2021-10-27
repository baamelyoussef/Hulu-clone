import requests from "../utils/requests";
import {useRouter} from "next/router"

function Nav() {
    const router= useRouter();

    return (
        <nav>
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide pt-3">
                {Object.entries(requests).map(([key, {title, url}]) =>(
                    <h2 
                    key={key} 
                    onClick={() => router.push(`/?genre=${key}`)}
                    className='cursor-pointer transition duration-100 transform hover:animate-pulse hover:text-3xl  active:text-green-600 last:pr-24 '
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
        </nav>
    )
}

export default Nav
