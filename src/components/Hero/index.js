import React from 'react'
import heroImg from '../../assets/heroImg.jpg'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">¡Bienvenido al Marketplace exclusivo para empleados y asesores de SURA!
          </h1>
          <p className="mb-8 leading-relaxed">En nuestro Marketplace, creado especialmente para ti, encontrarás una amplia gama de productos y servicios de alta calidad que se adaptan a tus necesidades. Desde productos electrónicos de última generación hasta artículos de moda y accesorios, nuestro objetivo es brindarte una experiencia de compra excepcional.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Mostrar todos los productos</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contactanos</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src='/img/sura_enterprise.png'/>
        </div>
      </div>
    </section>
  )
}

export default Hero