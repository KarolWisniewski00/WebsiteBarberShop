import React from "react"

class About extends React.Component {
    render() {
        return (
            <section className="py-32 bg-[url(../public/images/assets.png)] bg-cover bg-center bg-no-repeat" id="about">
                <div className="flex items-center justify-center">
                    <div className="mt-12 lg:mt-0 bg-stone-900/75 m-5 md:m-0 p-5 md:p-10 w-full md:w-3/4 lg:w-1/2">
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-12 color-custom text-center">O nas</h1>
                        <p className="mt-4 text-xl leading-relaxed text-stone-100 text-center">
                            Jesteśmy dla Ciebie!
                            Słuchamy Cię i staramy się pomagać w kreowaniu Twojego wymarzonego wizerunku.
                            Stylista w naszym salonie potrafi zaplanować najlepszą fryzurę dla naszego klienta.
                            Kreatywne cięcia to umiejętność, którą wyróżnia się każdy fryzjer.
                            Zespół Salonu Avantgarde to zawsze: kreatywne cięcia, piękne kolory Twoich włosów, modne stylizacje, usługi barberskie oraz najlepsze kosmetyki.
                            Wszystkie zabiegi w naszym salonie przeprowadzamy w pełni profesjonalnie, w miłej atmosferze. Z przyjemnością rozmawiamy z klientami o oczekiwaniach i staramy się tworzyć stylizacje w jak najwyższym stopniu odpowiadające ich wyobrażeniom.
                            Dla nas fryzjerstwo to sztuka kreacji, wymagająca prawdziwej wirtuozerii i wyobraźni.
                            Wydobędziemy Twoje wewnętrzne piękno, oferując wspaniałą metamorfozę.
                            Nieustannie poszukujemy nowych sposobów na to, by dokonywać rewolucji oraz być na bieżąco z najnowszymi trendami. Każdy fryzjer oraz barber w naszym zespole poszukuje własnych ścieżek rozwoju, aby cieszyć się z zadowolenia oraz uśmiechu na ustach naszych klientów.
                            Zapraszamy do naszego salonu, przekonaj się jak pracują najlepsi fryzjerzy.
                            W naszej najnowszej ofercie oprócz koloryzacji i usług barberskich posiadamy szeroki zakres przedłużania i zagęszczania włosów.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default About