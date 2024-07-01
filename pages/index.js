
import Navbar from "@/components/navbar/Navbar";
import Main from "@/components/main/Main";
import Subscribe from "@/components/subscribe/Subscribe";
import Footer from "@/components/footer/Footer";



const Home=()=>{
  return(
    <div className="home">
      <Navbar />
      <Main />
      <Subscribe />
      <Footer />
    </div>
  )
}
export default Home;