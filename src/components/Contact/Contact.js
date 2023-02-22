import React from "react"

class Contact extends React.Component {
    render() {
        return (
            <section className="py-32 bg-[url(../public/images/contact.png)] bg-cover bg-center bg-no-repeat" id="contact">
                <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid grid-cols-4 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0 col-span-6  lg:col-span-2 bg-black/50 p-10 flex flex-col h-full">
                                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.2624655164295!2d18.985230727272796!3d50.366264842423675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d359b428cb07%3A0x9c883cff905c8d2e!2sAvantgarde.%20Salon%20fryzjerski%2FBarber.%20Staro%C5%84%20E.!5e1!3m2!1spl!2spl!4v1675776395558!5m2!1spl!2spl" width="500" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div className="text-center text-xl flex flex-col justify-center content-center ml-5">
                                    <div className="text-stone-100 py-3">ul. Biskupa Nankera 135, 41-949 Piekary Śląskie</div>
                                    <a href="tel:662001031"><div className="text-stone-100 hover:text-stone-400 py-3">662 001 031</div></a>
                                    <a href="mailto: studioavantgarde1981@gmail.com"><div className="text-stone-100 hover:text-stone-400 py-3 text-xs sm:text-base">studioavantgarde1981@gmail.com</div></a>
                                    <div className="py-3">
                                        <a href="https://instagram.com/studiofryzjerskieavangarde?igshid=YmMyMTA2M2Y=" className="text-stone-100 hover:text-stone-400 inline-flex items-center p-2"><svg className="block h-10 w-10 fill-current" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"/></svg></a>
                                        <a href="https://www.facebook.com/profile.php?id=100063634897913" className="text-stone-100 hover:text-stone-400 inline-flex items-center p-2"><svg className="block h-10 w-10 fill-current" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg></a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 lg:mt-0 col-span-6 lg:col-span-2 col-start-1 bg-black/50 p-10 h-full flex flex-col justify-center items-center">
                                <h1 className="text-5xl font-bold mb-12 color-custom text-center">Godziny otwarcia</h1>
                                <table className="table-auto w-full">
                                    <tbody className="text-stone-100">
                                        <tr>
                                            <td>Poniedziałek</td>
                                            <td className="text-right py-3 color-custom">ZAMKNIĘTE</td>
                                        </tr>
                                        <tr>
                                            <td>Wtorek</td>
                                            <td className="text-right py-3">9:00 - 20:00</td>
                                        </tr>
                                        <tr>
                                            <td>Środa</td>
                                            <td className="text-right py-3">9:00 - 18:00</td>
                                        </tr>
                                        <tr>
                                            <td>Czwartek</td>
                                            <td className="text-right py-3">9:00 - 18:00</td>
                                        </tr>
                                        <tr>
                                            <td>Piątek</td>
                                            <td className="text-right py-3">9:00 - 20:00</td>
                                        </tr>
                                        <tr>
                                            <td>Sobota</td>
                                            <td className="text-right py-3">8:00 - 14:00</td>
                                        </tr>
                                        <tr>
                                            <td>Niedziela</td>
                                            <td className="text-right py-3 color-custom">ZAMKNIĘTE</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact