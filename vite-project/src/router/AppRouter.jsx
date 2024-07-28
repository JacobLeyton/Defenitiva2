import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../Heroes/routes/HeroesRoutes"
import { LoginPage } from "../auth/page/LoginPage"
export const AppRouter = () => {
  return (
    <>

        <Routes>
          <Route path="login" element={<LoginPage/>} />
          <Route path="/*" element={<HeroesRoutes/>} />
            
        </Routes>

    </>
    
  )
}
