import minusicon from './assets/images/icon-minus.svg';
import plusicon from './assets/images/icon-plus.svg';
import { content } from './content';

const Tab = ({ item: { question, answer, index, open, setOpen } }) => {

  const handleSetOpen = () => {
    setOpen(index);
  }

  return (
    <div className="text-sm sm:text-lg">
      <div className="text-dark-purple font-semibold flex items-center justify-between gap-5 cursor-pointer" onClick={() => handleSetOpen()}>
        <p className="leading-4 md:leading-5">{question}</p>
        <img src={open === index ? minusicon : plusicon} alt="" />
      </div>

      <div className={`grid my-5 grid-rows-[0fr] md:my-7`}>
        <div className={`text-grayish-purple transition-grid-rows duration-300 grid-row-end-span-2 ${index !== content.length - 1 ? 'border-b-2' : ''} ${open === index ? 'pb-5 grid-rows-[1fr]' : 'overflow-hidden'}`}>
          {answer}
        </div>
      </div>
    </div>
  )
}

export default Tab;