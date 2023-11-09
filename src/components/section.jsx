

const Section = () => {
  return (
   <div className='flex justify-center items-center gap-[60px] w-full pt-[180px] xs:flex  text-[28px] text-blue'>

    <div className=' flex flex-col justify-center items-center w-full '>
      <h1 className='sm:text-[35px] text-primary'>100+</h1>
      <p className=' text-[13px]'> теоретических и практических<br />курсов для разного уровня</p>
    </div>

    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='sm:text-[35px] text-primary'>3 000</h1>
      <p className='text-[13px]'>часов видео-лекций и вебинаров<br />
        от лучших преподавателей</p>
    </div>
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='sm:text-[35px] text-primary'>15</h1>
      <p className='text-[13px]'>направлений обучения<br /> востребованным профессиям</p>
    </div>
    <div className='flex flex-col justify-center items-center w-full'>
      <h1 className='sm:text-[35px] text-primary'>2 000</h1>
      <p className='text-[13px]'>учеников уже занимаются<br />
        на нашей платформе</p>
    </div>
   </div>
  )
}

export default Section