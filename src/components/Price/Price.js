import React from "react"

class Price extends React.Component {
    render() {
        return (
            <section className="py-32 bg-[url(../public/images/price.png)] bg-cover bg-center bg-no-repeat" id="price">
                <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid lg:grid-cols-4 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0 col-span-2 col-start-1 sm:col-start-3 bg-black/50 p-10">
                                <table className="table-auto w-full">
                                    <thead className="color-custom text-3xl">
                                        <tr>
                                            <th>Oferta</th>
                                            <th className="text-right">Cena</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-100">
                                        <tr>
                                            <td>Strzyżenie włosów</td>
                                            <td className="text-right py-3">70 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Strzyżenie włosów <span className="color-custom font-bold">PREMIUM</span></td>
                                            <td className="text-right py-3">100 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Strzyżenie włosów – maszynką na jedną długość</td>
                                            <td className="text-right py-3">30 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Broda Strzyżenie/Golenie</td>
                                            <td className="text-right py-3">60 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Broda Strzyżenie/Golenie <span className="color-custom font-bold">PREMIUM</span></td>
                                            <td className="text-right py-3">90 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>COMBO Włosy + Broda</td>
                                            <td className="text-right py-3">110 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>COMBO Włosy + Broda <span className="color-custom font-bold">PREMIUM</span></td>
                                            <td className="text-right py-3">140 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>COMBO II włosy maszynką na jedną długość + broda</td>
                                            <td className="text-right py-3">80 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>COMBO II <span className="color-custom font-bold">PREMIUM</span></td>
                                            <td className="text-right py-3">115 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Tata + dziecko (do 12 lat) Strzyżenie</td>
                                            <td className="text-right py-3">120 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Tata (COMBO) plus Dziecko(do 12 lat) Strzyżenie</td>
                                            <td className="text-right py-3">150 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Koloryzacja</td>
                                            <td className="text-right py-3">60 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Modelowanie</td>
                                            <td className="text-right py-3">30 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Usługa <span className="color-custom font-bold">PREMIUM</span> SPA/WOSK</td>
                                            <td className="text-right py-3">40 PLN</td>
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