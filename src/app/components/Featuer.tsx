"use client"
import React from 'react';
import Featuercard from './Featuercard';

const data = [{
  img: "/image/truck-removebg-preview.png",
  title: "Free Shipping",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum."
},
{
  img: "/image/cash-removebg-preview.png",
  title: "Money Back Guarantee",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum."
},
{
  img: "/image/24-removebg-preview.png",
  title: "24/7 Support",
  desc: "Lorem ipsum dolorr sit amet consectetur adipisicing elit. Doloribus, voluptatum."
}];

const Feauter = () => {
  return (
      <div className='container pt-16 '>
          <div className='grid md:grid-cols-2 gap-y-4 lg:gap-y-4 lg:grid-cols-3 gap-4'>
              {data.map(item => (
                  <div className="flip-card" key={item.title}>
                      <div className="flip-card-inner">
                          <div className="flip-card-front">
                              <Featuercard img={item.img} title={item.title} desc={item.desc}/>
                          </div>
                          <div className="flip-card-back">
                              <h3>{item.title}</h3>
                              <p>{item.desc}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          <style jsx>{`
              .flip-card {
                  
                
                  background-color: transparent;
                  width: 100%;
                  height: 200px;
                  perspective: 1000px;
                
              }
                 

              .flip-card-inner {
                  position: relative;
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  transition: transform 0.6s;
                  transform-style: preserve-3d;
                  

              }

              .flip-card:nth-child(1) .flip-card-inner {
                  animation: flip 7s infinite 3s;
              }

              .flip-card:nth-child(2) .flip-card-inner {
                  animation: flip 7s infinite 4s;
              }

              .flip-card:nth-child(3) .flip-card-inner {
                  animation: flip 7s infinite 6s;
              }

              @keyframes flip {
                  0%, 100% { transform: rotateY(0deg); }

                  20%, 80% { transform: rotateY(180deg); }
              }

              .flip-card-front, .flip-card-back {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
                  
              }

              .flip-card-front {
                  background-color: ;
                  color: black;

              }

              .flip-card-back {
                background: linear-gradient(145deg, #0a2e73, #5078f0, #a3caff);
                  color: white;
                  transform: rotateY(180deg);
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  padding: 10px;
                  
              }

              .flip-card-back h3 {
                  font-size: 14px;
                  margin-bottom: 5px;
              }

              .flip-card-back p {
                  font-size: 12px;
              }
          `}</style>
      </div>
  );
};

export default Feauter;
