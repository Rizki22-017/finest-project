import { Route, Routes } from "react-router-dom"
import { Profile } from "./seller/Profile"
import { HeaderSeller } from "./components/layout/HeaderSeller"
import { FooterComponent } from "./components/FooterComponent"
import { Finance } from "./seller/Finance"

export const Seller = () => {
  return (
    <>
    <HeaderSeller/>
        <Routes>
        <Route path="profile" element={<Profile/>}/>
        <Route path="finance" element={<Finance/>}/>
        </Routes>
    <FooterComponent/>
    </>
  )
}
