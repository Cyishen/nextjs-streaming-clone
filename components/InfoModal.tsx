import React, { useCallback, useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";

import PlayButton from './PlayButton';

import useMovie from '@/hooks/useMovie';
import useInfoModal from '@/hooks/useInfoModal';

interface InfoModalProps {
    visible?: boolean;
    onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {

    const  [isVisible, setIsVisible] = useState(!!visible);

    const { movieId: movieId } = useInfoModal();

    const movieIdString = movieId || '';
    const { data } = useMovie(movieIdString);

    useEffect(() => {
        setIsVisible(!!visible)
    }, [visible])

    const handleClose = useCallback(()=>{
        setIsVisible(false)
        setTimeout(() =>{
            onClose()
        }, 300)
    },[onClose]);

    if (!visible) {
        return null
    };

    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative w-auto mx-auto max-w-3xl rounded-xl overflow-hidden">
                <div className={`${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>
                    
                    <div className="relative h-96">
                        <video src={data?.videoUrl} autoPlay loop className="w-full h-full brightness-[80%] object-cover"></video>
                        <div 
                            onClick={handleClose} 
                            className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-60 flex items-center justify-center">
                            <AiOutlineClose className="text-white"
                        />
                        </div>

                        <div className="absolute bottom-[10%] left-10">
                            <div className="flex flex-row gap-4 items-center">
                                <PlayButton movieId={data?.id || ''}/>
                            </div>

                            <p className="text-white text-2xl lg:text-4xl md:text-3xl font-bold mb-4 mt-4 hidden sm:block">
                                {data?.title}
                            </p>
                        </div>
                    </div>      

                    <div className="px-10 py-6">
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <p className="text-yellow-500 font-semibold text-lg">
                                2023 New 
                            </p>

                            <p className="text-white text-lg">
                                <span className="text-white">| </span>
                                {data?.duration} 
                                <span className="text-white"> |</span>
                            </p>

                            <p className="text-white text-lg">
                                {data?.genre}
                            </p>
                        </div>
                        <p className="text-white text-lg font-semibold">
                            {data?.season}
                        </p>
                        <p className="text-white text-lg">
                            {data?.description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )


}

export default InfoModal