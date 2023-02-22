import React from "react"

class Gallery extends React.Component {
    render() {
        return (
            <section className="overflow-hidden text-gray-700 bg-img" id="gallery">
                <div className="container px-5 py-2 mx-auto lg:py-16 lg:px-32 bg-stone-900/50 m-12">
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-12 text-stone-100 text-center">Galeria</h1>
                    <div className="flex flex-wrap flex-col sm:flex-row -m-1 md:-m-2">
                        <div className="flex flex-wrap sm:w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/zdj6.jpg"/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/zdj3.jpg"/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/zdj2.jpg"/>
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/zdj4.jpg"/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/zdj5.jpg"/>
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/zdj1.jpg"/>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-12 text-stone-100 text-center my-3">Salon</h1>
                    <div className="flex flex-wrap flex-col sm:flex-row -m-1 md:-m-2">
                        <div className="flex flex-wrap sm:w-full">
                            <div className="w-full md:w-1/3 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/salon1.jpg"/>
                            </div>
                            <div className="w-full md:w-1/3 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/salon2.jpg"/>
                            </div>
                            <div className="w-full md:w-1/3 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full"
                                    src="images/salon3.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Gallery