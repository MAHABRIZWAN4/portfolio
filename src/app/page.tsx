import Navbar from "./Components/Navbar"
import Education from "./education/page"
import Intro from "./intro/page"
import Portfolio from "./portfolio/page"
export default function Home(){
return(
  <main className="max-w-7xl mx-auto bg-gray-100">
    <Navbar/>
  <Intro/>
  <Education/>
  <Portfolio/>
  </main>
)
}