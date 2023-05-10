import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import FeatureCard from '../../components/FeatureCard'
import Hero from '../../components/Hero'
import ProductCard from '../../components/ProductCard'
import Products from '../../components/ProductCard'
import Stats from '../../components/StatCard'

const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data = [
        {
          id: 1,
          title: "Tigre peluche",
          price: 30000,
          description:
            "Muñeco en tela, hecho a mano.",
          category: "Accesorios",
          image: "/img/tigre peluche.jpg",
          rating: { rate: 3.9, count: 120 },
        },
        {
          id: 2,
          title: "Termo Operativo",
          price: 3622,
          description:
            "Termo solo para uso de bebidas frias.",
          category: "Accesorios",
          image:
            "/img/termo.jpeg",
          rating: { rate: 4.1, count: 259 },
        },
        {
          id: 3,
          title: "Cojín Tigre Bot",
          price: 55.99,
          description:
            "Cojín Tigre Bot - Material peluche.",
          category: "Accesorios",
          image: "/img/cojin bot.jpg",
          rating: { rate: 4.7, count: 500 },
        },
        {
          id: 4,
          title: "Tula Deportiva",
          price: 9750,
          description:
            "Tula diseño deportivo con ajuste...",
          category: "Accesorios",
          image: "/img/tula.jpg",
          rating: { rate: 2.1, count: 430 },
        },
        {
          id: 5,
          title:
            "Computador. Producto sin garantía software y hardware. Una compra por año...",
          price: 100000,
          description:
            "Computador. Producto sin garantía software y hardware. Una compra por año...",
          category: "Electrónica",
          image:
            "/img/computador fijo.jpg",
          rating: { rate: 4.6, count: 400 },
        },
        {
          id: 6,
          title: "All in one. Producto sin garantía software y hardware. Una compra por año...",
          price: 100000,
          description:
            "All in one. Producto sin garantía software y hardware. Una compra por año...",
          category: "Electrónica",
          image:
            "/img/All in one.jpg",
          rating: { rate: 3.9, count: 70 },
        },
        {
          id: 7,
          title: "Portàtil.Producto sin garantía software y hardware. Una compra por año. Transporte...",
          price: 150000,
          description:
            "Portàtil.Producto sin garantía software y hardware. Una compra por año. Transporte...",
          category: "Electrónica",
          image:
            "/img/Portatil.jpg",
          rating: { rate: 3, count: 400 },
        },
        {
          id: 8,
          title: "Cuaderno SURA",
          price: 9684,
          description:
            "Cuaderno Sura - Papel Earth...",
          category: "Accesorios",
          image:
            "/img/cuaderno surajpg.jpg",
          rating: { rate: 1.9, count: 100 },
        },
        
      ];
      console.log('productos',data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <Hero />
      <Categories/>
      <div className="flex flex-col text-center w-full mt-20">
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTOS</h2>
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">PRODUCTOS MÁS POPULARES</h1>
      </div>
      {
        products.length > 0 ? 
        <ProductCard products={products} /> 
        :
        <div>Loading.....</div>
      }
      <Products />
      {/* <Stats/> */}
    </>
  )
}

export default Home