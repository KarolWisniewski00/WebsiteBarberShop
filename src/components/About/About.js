import React from "react"

class About extends React.Component {
    render() {
        return (
            <section className="py-32 bg-[url(../public/images/assets.png)] bg-cover bg-center bg-no-repeat" id="about">
                <div className="flex items-center justify-center">
                    <div className="mt-12 lg:mt-0 bg-stone-900/75 p-10 w-3/4 lg:w-4/12">
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-12 color-custom text-center">Nasza historia</h1>
                        <p className="mt-4 text-xl leading-relaxed text-stone-100 text-center">
                            Nasz salon Barber Shop działa na rynku już od kilku lat i cieszy się ogromnym zaufaniem wśród klientów. Nasz sukces opiera się na profesjonalizmie i zaangażowaniu naszego zespołu oraz na indywidualnym podejściu do każdego klienta. Dbamy o to, aby każdy, kto skorzysta z naszych usług, był zadowolony i wracał do nas z przyjemnością. Dołącz do grona zadowolonych klientów i odwiedź nasz salon Barber Shop.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About