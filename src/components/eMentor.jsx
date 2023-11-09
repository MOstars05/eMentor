import { ementor } from "../assests"


const Ementor = () => {
  return (
    <div className="flex text-blue justify-between items-center pb-[20px] relative">
        <img src={ementor} alt="" className="" />
        <div className="flex flex-col justify-end items-start gap-[40px] absolute right-0">
          <h1 className="text-[50px]">Присоединяйтесь<br />
            к E-Mentor сейчас</h1>
            <p className="w-[500px]">Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы подарим вам дополнительные лекции по любому направлению бесплатно!</p>
            <button>
              <a href="#" className="rounded-tr-[30px] rounded-bl-[30px]  py-[11px] px-[100px] bg-secondary text-white">Все курсы</a>
          </button>
        </div>
    </div>
  )
}

export default Ementor