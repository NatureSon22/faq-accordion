import mobilebg from './assets/images/background-pattern-mobile.svg';
import deskbg  from './assets/images/background-pattern-desktop.svg';
import staricon from './assets/images/icon-star.svg';
import { content } from './content';
import Tab from './Tab';
import { useState } from 'react';


const App = () => {
  const [open, setOpen] = useState(0);

  return (
    <main className="min-h-screen bg-light-pink font-work grid place-items-center" >
      {/* bg-image */}
      <div className="w-full h-[30%] absolute top-0" >
        <img className="w-full h-full object-cover sm:hidden" src={mobilebg} alt="" />
        <img className="w-full hidden h-full object-cover sm:block" src={deskbg} alt="" />
      </div>

      {/* accordion */}
      <div className="w-[85%] px-5 pt-5  bg-white rounded-md z-10 md:w-[42rem] md:px-10 md:pt-10">
        <div className="mb-5 flex gap-7">
          <img src={staricon} alt="" />
          <h1 className="py-3 text-4xl sm:text-5xl text-dark-purple font-bold">FAQs</h1>
        </div>
        
        <div className="" >
          {
              content.map((item, index) => {
              return (
                <Tab item={{...item, index, open, setOpen}} key={item.id}></Tab>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export default App;