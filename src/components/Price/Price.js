import React from "react"

class Price extends React.Component {
    render() {
        return (
            <section className="py-32 bg-[url(../public/images/woman.png)] bg-cover bg-center bg-no-repeat" id="price">
                <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid lg:grid-cols-4 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0 col-span-2 col-start-1 bg-black/50 p-10">
                                <table className="table-auto w-full">
                                    <thead className="color-custom text-3xl">
                                        <tr>
                                            <th>Oferta</th>
                                            <th className="text-right">Cena</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-100">
                                        <tr>
                                            <td>Strzyżenie damskie</td>
                                            <td className="text-right py-3">80 - 150 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Koloryzacja jednolita</td>
                                            <td className="text-right py-3">150 - 200 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Rozjaśnianie metodami (Air touch, Refleksy, Babylights, Dekoloryzacja)</td>
                                            <td className="text-right py-3">350 - 500 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Keratynowe prostowanie</td>
                                            <td className="text-right py-3">350 - 500 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Fryzury okolicznościowe</td>
                                            <td className="text-right py-3">100 - 150 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Upięcia ślubne</td>
                                            <td className="text-right py-3">200 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Pielęgnacja FibreClinix / ScalpClinix</td>
                                            <td className="text-right py-3">80 - 100 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Pielęgnacja L'Oreal MetalDetox</td>
                                            <td className="text-right py-3">50 - 80 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Pielęgnacja L'Oreal  (Regeneracja, Wygładzenie, Nawilżenie, Objętość)</td>
                                            <td className="text-right py-3">55 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Henna brwi</td>
                                            <td className="text-right py-3">30 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Henna rzęs</td>
                                            <td className="text-right py-3">20 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Przedłużanie lub zagęszczanie włosów (różnymi metodami)</td>
                                            <td className="text-right py-3 color-custom">Indywidualnie</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="table-auto w-full">
                                    <thead className="color-custom text-3xl">
                                        <tr>
                                            <th>Barber</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-100">
                                        <tr>
                                            <td>Strzyżenie męskie</td>
                                            <td className="text-right py-3">50 - 80 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Strzyżenie męskie + broda (COMBO)</td>
                                            <td className="text-right py-3">100 - 120 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Strzyżenie męskie + cover strzyżenia męskiego</td>
                                            <td className="text-right py-3">120 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Cover włosów</td>
                                            <td className="text-right py-3">70 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Cover brody</td>
                                            <td className="text-right py-3">70 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Golenie pełne głowy brzytwą</td>
                                            <td className="text-right py-3">55 PLN</td>
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

export default Price