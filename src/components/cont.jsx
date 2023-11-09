import { jingaleopa, logo, shilyapaopa } from "../assests"

const Cont = () => {
  return (
    <div className="ss:flex block justify-between items-center w-full">
      <div className="">
        <div className="text-white sm:flex justify-between items-center flex-col gap-[20px] mt-[50px] hidden  text-[25px]">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-square-instagram"></i>
        </div>
      <div className="text-white xs:flex justify-between items-center gap-[20px] mt-[50px] sm:hidden   ">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-square-instagram"></i>
      </div>
        <img src={shilyapaopa} alt="" className="mt-[200px] rounded-tr-[100px]"/>
      </div>
      <div className="text-white mt-[200px] flex flex-col justify-center items-center gap-[10px]">
        <img src={logo} alt="" className="w-[200px]" />
        <h1 className="text-[60px]"> Образовательная<br />онлайн-платформа</h1>
        <p className="">Курсы и видео-лекции по дизайну, копирайтингу, <br />SMM, таргету и многим другим направлениям</p>
        <button >
         <a href="#" className="rounded-tr-[30px] rounded-bl-[30px]  py-[8px] px-[30px] bg-secondary">Все направления</a>
       </button>
      </div >
      <div className="flex flex-col gap-[150px]">
        <img src={jingaleopa} alt="" className="mt-[100px] rounded-tl-[100px] w-full " />
        <p className="rotate-[90deg] text-white ml-[100px]">Листайте вниз</p>
      </div>

      



      
      
    </div>
   
  )
}

export default Cont