import { logotype } from "../assests"

const Footer = () => {
    return (
        <div className="w-full text-blue">
            <div className="w-full p-[60px] flex justify-between items-center">
                <div className="flex flex-col gap-[40px] w-full">
                    <img src={logotype} alt="" className="w-[200px]" />
                    <h1 className="w-[300px]">Образовательная онлайн-платформа для развития и тренировки навыков
                        в сфере информационных технологий</h1>
                    <div className="flex justify-start items-center gap-[30px] text-[30px] ">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-telegram"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                    </div>
                </div>
                <div className="flex gap-[110px] justify-end items-center">
                    <div className="flex flex-col gap-[20px]">
                        <h2>Обучение</h2>
                        <ul className="leading-[40px]">
                            <li>Курсы</li>
                            <li>Вебинары</li>
                            <li>Тренажеры</li>
                            <li>Воркшопы</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <h2>О нас</h2>
                        <ul className="leading-[40px]">
                            <li>О платформе</li>
                            <li>Преподаватели</li>
                            <li>Тарифы</li>
                            <li>Отзывы</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <h2>Контакты</h2>
                        <ul className="leading-[40px]">
                            <li>Связаться с нами</li>
                            <li>Консультация</li>
                            <li>Реквизиты</li>
                            <li>Поддержка</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[20px]">
                        <h2>Возникли вопросы?</h2>
                        <p>Напишите нам на почту<br />
                            education@ementor.info</p>
                    </div>
                </div>
            </div>
            <div className="text-blue xx:block flex justify-between items-center  p-[20px]">
                <p>E-Mentor © 2021 Все права защищены</p>
                <div className="flex justify-between items-center gap-[40px]">
                    <p>Политика обработки персональных данных</p>
                    <p>Публичная оферта</p>
                </div>
            </div>


        </div>

    )
}

export default Footer
