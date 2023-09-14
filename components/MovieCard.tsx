import React from 'react';

import { BiChevronDown } from "react-icons/bi"

import PlayButton from './PlayButton';
import { MovieType } from '@/types';

import useInfoModal from '@/hooks/useInfoModal';

interface MovieCardProps {
    data: MovieType;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {

  const { openModal } = useInfoModal();

  return (
    <div className="group bg-zinc-900 col-span relative h-[200px] md:h-[250px]">
      <img className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[200px] md:h-[250px]" 
        src={data.thumbnailUrl} 
        alt="thumbnail" 
        draggable={false} 
      />
      
      <div className="
          opacity-0 
          absolute 
          top-0 
          transition 
          duration-200 
          z-10 
          delay-300 
          w-full 
          scale-0 
          group-hover:scale-110 
          group-hover:-translate-y-[6vw] 
          group-hover:translate-x-[2vw] 
          group-hover:opacity-100">
        <img className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[15vw]"
          src={data.thumbnailUrl} 
          alt="thumbnail" 
          draggable={false}  
        />

        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div className="cursor-pointer flex justify-center items-center transition hover:bg-neutral-300">
              <PlayButton movieId={data.id} />
            </div>

            <div
              onClick={ ()=>openModal(data.id) } 
              className="
                cursor-pointer 
                ml-auto group/item 
                w-6 h-6 
                lg:w-10 lg:h-10 
                border-white border-2 
                rounded-full 
                flex justify-center items-center 
                transition hover:border-neutral-300"
            >
              <BiChevronDown className="text-white" />
            </div>
          </div>

          <p className="text-yellow-500 font-semibold mt-2">
            New <span className="text-white">| 2023</span>
          </p>

          <div className="flex flex-row mt-2 gap-2 items-center"> 
            <p className="text-white text-[10px] lg:text-sm">{data.title}</p>
          </div>

          <div className="flex flex-row mt-2 gap-2 items-center text-[8px]">
            <p className="text-orange-400 lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovieCard;