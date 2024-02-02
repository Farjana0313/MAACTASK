import React from 'react'
import Footer from '../../components/dashboard/Footer'
import Header from '../../components/dashboard/Header'
import Sidebar from '../../components/dashboard/Sidebar'
import "./Dashboard.css"


export default function RegionListOne() {
  return (
    <div className="dashboard">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  )
}

