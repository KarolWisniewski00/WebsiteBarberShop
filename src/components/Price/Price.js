import React from "react"

class Price extends React.Component {
    render() {
        return (
            <section className="py-32 bg-[url(../public/images/woman.png)] bg-cover bg-center bg-no-repeat" id="price">
                <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
                    <div className="container mx-auto xl:px-32">
                        <div className="grid lg:grid-cols-4 gap-12 flex items-center">
                            <div className="mt-12 lg:mt-0 col-span-2 bg-black/50 p-5 md:p-10">
                                <table className="table-auto w-full">
                                    <thead className="color-custom text-3xl">
                                        <tr>
                                            <th>Oferta</th>
                                            <th className="text-right">Cena</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-100">
                                        <tr className="border-b  md:border-none">
                                            <td>Strzyżenie damskie</td>
                                            <td className="text-right py-3 whitespace-nowrap">80 - 150 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Modelowanie włosów</td>
                                            <td className="text-right py-3 whitespace-nowrap">50 PLN - 100 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Koloryzacja jednolita</td>
                                            <td className="text-right py-3 whitespace-nowrap">150 - 200 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Rozjaśnianie metodami ( air touch, refleksy, babylights, dekoloryzacja)</td>
                                            <td className="text-right py-3 whitespace-nowrap">350 - 500 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Keratynowe prostowanie</td>
                                            <td className="text-right py-3 whitespace-nowrap">350 - 500 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Fryzury okolicznościowe</td>
                                            <td className="text-right py-3 whitespace-nowrap">100 - 150 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Upięcia ślubne</td>
                                            <td className="text-right py-3 whitespace-nowrap">200 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Pielęgnacja FibreClinix</td>
                                            <td className="text-right py-3 whitespace-nowrap">80 - 100 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Pielęgnacja ScalpClinix (Kojący)</td>
                                            <td className="text-right py-3 whitespace-nowrap">100 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Pielęgnacja ScalpClinix (Kontrolujący Sebum)</td>
                                            <td className="text-right py-3 whitespace-nowrap">100 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Pielęgnacja ScalpClinix (Przeciwłupieżowy)</td>
                                            <td className="text-right py-3 whitespace-nowrap">100 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Pielęgnacja L'Oreal MetalDetox</td>
                                            <td className="text-right py-3 whitespace-nowrap">50 - 80 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Pielęgnacja L'Oreal  ( regeneracja, wygładzenie, nawilżenie, objętość )</td>
                                            <td className="text-right py-3 whitespace-nowrap">55 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>BOTOX innowacyjny zabieg pielęgnacyjny, regeneracja i odbudowa ( utrzymuje się 3-6 miesięcy)</td>
                                            <td className="text-right py-3 whitespace-nowrap">250 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Henna + regulacja brwi</td>
                                            <td className="text-right py-3 whitespace-nowrap">30 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Henna rzęs</td>
                                            <td className="text-right py-3 whitespace-nowrap">20 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Wąsik</td>
                                            <td className="text-right py-3 whitespace-nowrap">20 PLN +</td>
                                        </tr>
                                        <tr>
                                            <td>Przedłużanie lub zagęszczanie włosów (różnymi metodami)</td>
                                            <td className="text-right py-3 color-custom font-bold">Indywidualnie</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className="table-auto w-full mt-5">
                                    <thead className="color-custom text-3xl">
                                        <tr>
                                            <th>Barber</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-100">
                                        <tr className="border-b md:border-none">
                                            <td>Strzyżenie męskie</td>
                                            <td className="text-right py-3 whitespace-nowrap">50 - 80 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Strzyżenie brody</td>
                                            <td className="text-right py-3 whitespace-nowrap">70 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Strzyżenie męskie + broda (COMBO)</td>
                                            <td className="text-right py-3 whitespace-nowrap">100 - 120 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Strzyżenie męskie + cover strzyżenia męskiego</td>
                                            <td className="text-right py-3 whitespace-nowrap">120 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Strzyżenie brody + cover brody</td>
                                            <td className="text-right py-3 whitespace-nowrap">140 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Cover włosów</td>
                                            <td className="text-right py-3 whitespace-nowrap">70 PLN</td>
                                        </tr>
                                        <tr className="border-b md:border-none">
                                            <td>Cover brody</td>
                                            <td className="text-right py-3 whitespace-nowrap">70 PLN</td>
                                        </tr>
                                        <tr>
                                            <td>Golenie pełne głowy brzytwą</td>
                                            <td className="text-right py-3 whitespace-nowrap">55 PLN</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="text-white py-3 color-custom font-bold mt-5">Ceny zależne są od długości oraz gęstości włosów. W przypadku ekstremalnie długich i/lub gęstych włosów cena jest ustalana indywidualnie</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Price