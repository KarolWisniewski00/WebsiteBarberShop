import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <footer className="p-4 bg-stone-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
                <span className="text-sm text-stone-100 sm:text-center">© 2022 <a href="" className="hover:underline">Karol Wiśniewski</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-stone-100 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Start</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Polityka prywatności</a>
                    </li>
                    <li>
                        <a href="https://booksy.com/pl-pl/" className="mr-4 hover:underline md:mr-6">Rezerwacja</a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer