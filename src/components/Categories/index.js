import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = [
        {
          "name": "Electrónica",
          "description": "Encuentra una amplia selección de productos electrónicos, desde smartphones y computadoras hasta dispositivos inteligentes y gadgets de última generación. Descubre lo último en tecnología para mantenerte conectado y disfrutar de una experiencia digital excepcional."
        },
        {
          "name": "Ropa",
          "description": "Explora nuestra colección de ropa y accesorios de moda para hombres, mujeres y niños. Encuentra prendas de vestir, calzado y complementos que reflejen tu estilo único. Desde elegante ropa formal hasta ropa casual y deportiva, tenemos opciones para todas las ocasiones."
        },
        {
          "name": "Accesorios",
          "description": "Descubre una variedad de accesorios prácticos y elegantes para el hogar y la oficina. Desde decoración y organizadores hasta utensilios y herramientas útiles, nuestros accesorios están diseñados para mejorar tu entorno y simplificar tu vida diaria."
        },
        {
          "name": "Pisapapeles",
          "description": "Nuestros pisapapeles son piezas decorativas y funcionales que añaden un toque de estilo a tu espacio de trabajo. Disponibles en una variedad de diseños únicos, estos objetos no solo mantienen tus documentos en su lugar, sino que también se convierten en atractivos elementos decorativos."
        }
      ]
      
      console.log(data, 'dataaa')
      setCategories(data)
    }
    fetchCategories()
  }, [])

  if (categories.length === 0) return <div>Loading.....</div>

  return (
      <FeatureCard cards={categories}/>
  )
}

export default Categories