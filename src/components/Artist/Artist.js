import React from "react"

class Artist extends React.Component {
    render() {
        return (
            <section className="py-32 bg-[url(../public/images/wall.jpg)] bg-cover bg-center bg-no-repeat " id="artist">
                <div className="flex items-center justify-center">
                    <div className="mt-12 lg:mt-0 bg-stone-900/75 m-5 md:m-0 p-5 md:p-10 w-full md:w-3/4">
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-12 color-custom text-center">Nasi artyści</h1>
                        <div className="flex flex-wrap w-full">
                            <div className="w-full md:w-1/2 p-1 md:p-2 flex flex-col items-center justify-center">
                                <img alt="gallery" className="block object-cover object-center w-1/2 h-1/2 p-2"
                                    src="images/ela.jpg" />
                                <h3 className="text-3xl md:text-5xl color-custom py-2 text-center">Elżbieta Staroń</h3>
                                <p className="text-stone-100 text-center p-2">
                                    Twórca i właściciel marki Avantgarde. Otworzenie własnego salonu było zawsze jej marzeniem, spełniło się 12 lat temu. Mistrz nożyczek i koloryzacji. Absolwentka Akademii fryzjerskiej. Swoje nauki pobierała u najlepszych stylistów w Polsce. Doświadczenie 24-letnie sprawia iż możesz jej zaufać. Umie słuchać, a fryzjerska intuicja nigdy jej nie zawodzi. Dzięki niej w salonie powstają stylizacje, w których można się zakochać. Kompromisy jakościowe nie są dla niej, zawsze powtarza, iż klient zasługuje na to co najlepsze. Stworzyła salon z miłości do tego zawodu oraz zamiłowania do piękna. Jej zespół to wyjątkowi ludzie oraz szczególne miejsce i niezwykły klimat skupiony wokół profesjonalnego fryzjerstwa. Domena i filozofia właścicielki to ciągły i dynamiczny rozwój. Jest genialną profesjonalistką, nieustannie podnosi swoje kwalifikacje, dba o każdy nawet najmniejszy szczegół, ale jednocześnie jest niesamowicie ciepłą osobą, która wnosi w swój salon niepowtarzalną atmosferę.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 p-1 md:p-2 flex flex-col items-center justify-center">
                                <img alt="gallery" className="block object-cover object-center w-1/2 h-1/2 p-2"
                                    src="images/martyna.jpg" />
                                <h3 className="text-3xl md:text-5xl color-custom py-2 text-center">Martyna Kubiak</h3>
                                <p className="text-stone-100 text-center p-2">
                                Ukończyła technikum fryzjerskie w Łodzi. Jest dyplomowanym technikiem usług fryzjerskich. Nieustannie poszerza zakres swoich umiejętności i z determinacją dąży do wypracowania swojego indywidualnego stylu! Uczestniczyła w szkoleniu pokazowym  w Warszawie ze znanym barberem Adamem Szulcem i ekipą Jamy. Odbyła w Warszawie szkolenie techniczne z koloryzacji firmy Schwarzkopf. Uczestniczyła w szkoleniu ,,Kok III spirale" z Dominiką Prokopovicz. Ukończyła szkolenie z przedłużania i zagęszczania włosów metodą hairtalk extensions, hairtalk hairwear oraz hairtalk keratin extensions. W swojej pracy przede wszystkim stawia na profesjonalne podejście do klienta oraz szczegółowo przeprowadzone konsultacje. Specjalizuje się w przedłużaniu i zagęszczaniu włosów. Wesoła i zawsze gotowa na wyzwania. Poszukiwanie piękna we włosach i urodzie klientki to jej specjalność.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 p-1 md:p-2 flex flex-col items-center justify-center">
                                <img alt="gallery" className="block object-cover object-center w-1/2 h-full p-2"
                                    src="images/wiktoria.jpg" />
                                <h3 className="text-3xl md:text-5xl color-custom py-2 text-center">Wiktoria Galicka</h3>
                                <p className="text-stone-100 text-center p-2">
                                Wiktoria od 10 lat realizuje się w zawodzie. Specjalizuje się w strzyżeniach męskich, które dobiera odpowiednio do kształtu głowy i najnowszych trendów fryzjerskich. Zajmuje się również trymowaniem i pielęgnacją brody. Kocha swoją pracę dlatego często uczestniczy w szkoleniach barberskich. Prywatnie szczęśliwa żona i mama.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 p-1 md:p-2 flex flex-col items-center justify-center">
                                <img alt="gallery" className="block object-cover object-center w-1/2 h-full p-2"
                                    src="images/sandra.jpg" />
                                <h3 className="text-3xl md:text-5xl color-custom py-2 text-center">Sandra Denis</h3>
                                <p className="text-stone-100 text-center p-2">
                                Od 5 lat rozwija swoje umiejętności w zawodzie fryzjera. Specjalizuje się w koloryzacjach oraz stylizacjach fryzur damskich i męskich. Zawsze służy poradą w sprawie pielęgnacji i stylizacji. Fryzjerstwo to jej pasja i spełnienie marzeń. W swojej pracy zawsze dąży do perfekcji, a największą przyjemność sprawia jej uśmiech na twarzy zadowolonego klienta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Artist