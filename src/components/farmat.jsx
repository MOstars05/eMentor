
import { bola } from '../assests'

const Farmat = () => {
  return (
    <div className='flex justify-center items-center mt-[150px] gap-[100px] text-white p-[100px]'>
      
        <img src={bola} alt="" className='rounded-tr-[100px]' />
      <div className='flex flex-col justify-end items-start gap-[40px]'>
        <h1 className='text-[40px]'>Выбирайте свой<br /> формат обучения</h1>
        <p className='text-[20px] w-[580px]'>Смотрите видео-лекции в удобное для вас время, обучайтесь на тренажере, участвуйте в       интенсивных  воркшопах
          с командой или проходите курс с гибким расписанием.
          На нашей платформе каждый найдет подходящий формат.</p>
          <button>
          <a href="#" className="rounded-tr-[30px] rounded-bl-[30px]  py-[11px] px-[100px] bg-secondary text-white">Все курсы</a>
        </button>
        </div>
      </div>
  )
}

export default Farmat