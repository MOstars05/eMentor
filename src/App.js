import { Cont, Navbar, Section, Uchites, Format, Kursi, Ementor, Footer } from "./components"

const App = () => {
  return (
    <div className="">
        <div className="bg-primary p-[40px]">
            <Navbar/>            
        </div>

        <div className="bg-primary p-[40px]">
            <Cont />
        </div>

        <div className="p-[40px]">
          <Section />
        </div>

        <div className="p-[40px]">
          <Uchites />
        </div>

        <div className="bg-primary p-[40px]">
          <Format />
        </div>

        <div className="p-[40px]">
          < Kursi />
        </div>

      <div className="p-[40px]">
        <Ementor />
      </div>

      <div className="p-[40px] text-black">
        <Footer />
      </div>

    </div>
   
  )
}

export default App