
const TestCard = ({name, title, content, icon}) => {
  return (
    <div className='flex justify-between max-w-[360px] py-16 flex-col px-10 my-5'>
        
        <p className="font-poppins text-[18px] my-0">{content}</p>
        <div className="flex flex-row">
            <img className="rounded-full w-[48px] h-[48px]" src={icon} alt="" />
            <div className="flex flex-col ml-4">
                <h1 className="font-poppins  font-semibold leading-[32px]">{name}</h1>
                <p className="font-poppins text-[13px]">{title}</p>
            </div>
        </div>
    </div>
  )
}

export default TestCard