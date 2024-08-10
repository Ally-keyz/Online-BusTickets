import React, { useState } from 'react';

const slides = [
  { id: 1, content: "Slide 1",img:'app/assets/Frame 873.png',name:'Whole Team',role:'Best ETIX team members' },
  { id: 2, content: "Slide 2",img:'app/assets/Team1.png' ,name:'Manzi Alpe',role:'Managing Director' },
  { id: 3, content: "Slide 3",img:'app/assets/Team2.png' ,name:'Ashrafu Tuyubahe',role:'Managing Director2' },
  { id: 4, content: "Slide 4",img:'app/assets/Team3.png',name:'Karasira Ken',role:'Backend Dev'  },
  { id: 5, content: "Slide 5",img:'app/assets/Team4.png', name:'Mary Canne' ,role:'Frontend Dev'  },
];

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (

    <div className="relative w-full max-w-lg mx-auto ">
       
      <div className="overflow-hidden relative">
      <div className="flex justify-center text-[17px] font-bold">
            Meet our team
        </div>
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                
          {slides.map((slide) => (<>
            <div key={slide.id} className="min-w-full flex justify-center items-center h-64  rounded ">
                <div className="">
              <img src={slide.img} width={160} alt="" />
              <div className="pl-10 pt-5 text-[13px] font-bold text-blue-500">{slide.name}</div>
              <div className="pl-10  text-[9px] font-semibold">{slide.role}</div>
              </div>
            </div>
           
            </>))}
        </div>
      </div>
     
      <div className="flex justify-center mt-1">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`cursor-pointer mx-1 w-2 h-2 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slides;