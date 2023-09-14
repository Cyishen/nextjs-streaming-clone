import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import InfoModal from "@/components/InfoModal";

import useInfoModal from "@/hooks/useInfoModal";

export default function Home() {

  const { isOpen, closeModal } = useInfoModal();
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal}/>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList title="2023 | New & Trailer"/>
      </div>
    </>
  )
}
