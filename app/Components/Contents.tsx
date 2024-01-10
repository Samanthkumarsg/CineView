import Image from 'next/image';
import MovieListCard from './Movie Cards/MovieListCard';

export default function Contents(){
  const fetchedUrl = 'https://www.kinokompendium.de/foto_kino_berlin/babylon_kino_mitte_a02.jpg'
    return(
      
            <div className='flex flex-row items-start justify-center h-screen w-full '> 
              <div style={{ 'backgroundImage': `url(${fetchedUrl})`}} className='h-screen w-full  bg-cover bg-no-repeat object-contain object-center
' ></div>
              
              <div className='flex flex-col bg-white rounded h-1/3 w-full px-12 py-6 '>     
                <div className=' w-full flex flex-col items-center justify-center'>
                  <Image src={'/babylon.jpg'} height={68} width={68} className='h-20 w-20 ' /> 
                  <h1 className=' text-lg font-semibold tracking-wide text-gray-800 my-3'> Babylon Kino </h1>
                </div>

                <div className='w-full flex flex-col items-start justify-center animate-pulse mt-3'>
                    <h1 className='text-2xl font-normal bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-red-900'>Als nächstes spielen</h1>
                </div>
                
                <MovieListCard/>
                <MovieListCard/>
                <MovieListCard/>



              
            </div>

          </div>
    
     
        
    )
}