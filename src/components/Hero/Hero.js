import React from "react"

class Hero extends React.Component {
    render() {
        return (
            <section className="relative bg-[url(../public/images/girl.png)] bg-cover bg-center bg-no-repeat">
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl text-stone-100"><strong className="block font-extrabold color-custom">Salon Avantgarde</strong>profesjonalne usługi fryzjerskie.</h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-stone-100">Salon Avantgarde to miejsce, które stworzyliśmy po to, aby z pasją móc wykonywać nasz zawód. Najważniejsze dla nas to piękno, profesjonalizm oraz wyjątkowa atmosfera! Tu zaczyna się Twoja przygoda z pięknem.</p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="https://booksy.com/pl-pl/176541_sudio-fryzjerskie-avantgarde_fryzjer_12376_piekary-slaskie#ba_s=sr_1"className="block w-full rounded color-custom-bg px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring sm:w-auto">Zarezerwuj wizytę</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero