import { achkiaka1, achkiaka2, achkiopa, jigarangsoch, qorasoch, sariqbola } from "../assests"


const Uchites = () => {
  return (
    <div className="w-full flex justify-between items-center pt-[150px] gap-[100px] ">
      <div className="flex flex-col gap-[20px] justify-start items-start text-blue w-full">
        <h1 className="text-[40px]">Учитесь у лучших</h1>
        <p className="w-[450px]">Наши преподаватели – профессионалы, которые добились успеха в своей области. Лид-дизайнеры известных студий, маркетологи крупнейших компаний, редакторы популярных медиа: получайте опыт из первых рук, в любое время. <br /> <br />
        Кураторы курсов – наши лучшие выпускники, будут помогать     и поддерживать вас на протяжении всего обучения.</p>
        <button>
         <a href="#" className="rounded-tr-[30px] rounded-bl-[30px]  py-[11px] px-[100px] bg-primary text-white">Все курсы</a>
       </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-[50px] text-blue w-full">
      <div className="flex gap-[50px] ">
        <div>
          <img src={achkiopa} alt="" />
          <p >Катя, ведущий дизайнер TailGroup</p>
        </div>
        <div>
          <img src={qorasoch} alt="" />
          <p>Марина, маркетолог Headers Market</p>
        </div>
        <div>
          <img src={sariqbola} alt="" />
          <p>Сава, PR-менеджер Central Media</p>
        </div>
      </div>
      <div className="flex gap-[50px] w-full">
        <div>
          <img src={achkiaka1} alt="" />
          <p>Паша, основатель LeadCompany</p>
        </div>
        <div>
          <img src={jigarangsoch} alt="" />
          <p>Саша, главный редактор Just Journal</p>
        </div>
        <div>
          <img src={achkiaka2} alt="" />
          <p>Лёня, ведущий разработчик Ymail</p>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Uchites