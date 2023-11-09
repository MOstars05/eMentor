
import { motion, target, efect, ssm } from '../assests'

const Kursi = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[120px] p-[150px] text-blue w-full'>
        <h1 className='text-[50px]'>Популярные курсы</h1>
           <div className='flex justify-center items-center gap-[70px]'>
                <div className=' flex flex-col gap-[20px]'>
                    <img src={motion} alt="" />
                    <p>Motion design</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <img src={target} alt="" />
                    <p>Таргет в Instagram</p>
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <img src={efect} alt="" />
                    <p>Эффектные презентации</p>
                </div>
               <div className='flex flex-col gap-[20px]'>
                    <img src={ssm} alt="" />
                    <p>SMM-стратегия</p>
               </div>
           </div>
            <button>
                <a href="#" className="rounded-tr-[30px] rounded-bl-[30px]  py-[11px] px-[100px] bg-secondary text-white">Все курсы</a>
            </button>

    </div>
  )
}

export default Kursi
