import React from "react"

class Hero extends React.Component {
    render() {
        return (
            <section className="relative bg-[url(../public/images/barber_background.png)] bg-cover bg-center bg-no-repeat ">
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-stone-100">Znajdź swój styl w naszym<strong className="block font-extrabold color-custom">Barber Shop</strong></h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-stone-100">Nasz zespół profesjonalnych fryzjerów pomoże Ci osiągnąć wymarzoną fryzurę i zadba o Twój wygląd. Relaksuj się w przytulnym salonie i ciesz się doskonałymi usługami fryzjerskimi</p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="https://booksy.com/pl-pl/"className="block w-full rounded color-custom-bg px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto">Zarezerwuj wizytę</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero