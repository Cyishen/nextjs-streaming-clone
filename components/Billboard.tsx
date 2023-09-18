
import React, { useCallback, useEffect, useRef } from 'react';
import PlayButton from './PlayButton';
import data from "@/data/data.json";

import useInfoModal from '@/hooks/useInfoModal';

const Billboard = () => {

    const movie = data.movies.find( (movie) => movie.id);

    const { openModal } = useInfoModal();

    const handleOpenModal = useCallback(() => {
      openModal(movie?.id as string)
    }, [openModal, movie?.id]);
  
    
    return ( 
        <div className="relative h-[80vw] sm:h-[56.25vw]">
        <video 
            src={movie?.videoUrl}
            autoPlay
            muted 
            loop 
            className=" w-full h-[80vw] sm:h-[56.25vw] object-cover brightness-[60%] transition duration-500">
        </video>
        
        <div className="absolute top-[60%] md:top-[50%] ml-4 md:ml-12">
          <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl whitespace-nowrap">
            {movie?.title}
          </p>
          <p className="text-white text-[8px] md:text-lg mt-3 w-[90%] md:w-[80%] lg:w-[70%] drop-shadow-xl hidden sm:block">
            {movie?.description}
          </p>
  
          <div className="flex flex-row items-center mt-3 gap-3 ">
            <PlayButton movieId={movie?.id || ''} />
            
            <button 
              onClick={handleOpenModal}
              className="
              bg-white
              text-white
                bg-opacity-30 
                rounded-md 
                py-1 md:py-2 
                px-2 md:px-4
                w-auto 
                text-xs lg:text-lg 
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-opacity-20
                transition
              "
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    );
}

export default Billboard;