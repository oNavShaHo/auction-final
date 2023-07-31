import React from 'react'
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Hero from "@/components/Hero";


export default function Home() {
  
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <div className="mx-20">
        <Card/>
        
      </div>
   </div>
  )
}
