import Image from 'next/image';

export default function Contents(){
  const fetchedUrl = 'https://www.kinokompendium.de/foto_kino_berlin/babylon_kino_mitte_a02.jpg'
    return(
      
            <div className='flex flex-row items-start justify-center h-screen w-full '> 
              <div style={{ 'backgroundImage': `url(${fetchedUrl})`}} className='h-screen w-full  bg-cover bg-no-repeat object-contain object-center
' ></div>
              
              <div className='flex flex-col bg-white rounded h-1/3 w-full px-12 py-6 '>     
                <div className='w-full flex flex-col items-center justify-center'>
                  <Image src={'/babylon.jpg'} height={68} width={68} className='h-24 w-24 ' /> 
                  <h1 className='h-[4rem] text-xl font-semibold tracking-wide text-gray-800 my-3'> Babylon Kino </h1>
                </div>

                <div className='w-full flex flex-col items-start justify-center animate-pulse my-2'>
                    <h1 className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-red-900'>Als nächstes spielen</h1>
                </div>

                <div className='flex flex-col items-start justify-center mt-4 border-b py-4'>
                    <h1 className='leading-relaxed text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-red-700 mb-2'>
                    Best of Sweden: WIE IM HIMMEL [As it is in heaven / Så som i himmelen] [OmeU] </h1>
                    <h1 className='text-xl font-semibold text-gray-600 mt-4'>Mi, 10.01.2024 17:00 </h1>
                </div>

                <div className='flex flex-col items-start justify-center mt-8 border-b py-8'>
                    <h1 className='leading-relaxed text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-slate-900 mb-2'>
Best of Sweden: DAS MÄDCHEN MIT DEN HYAZINTHEN [OmeU]  </h1>
                    <h1 className='text-2xl font-semibold text-gray-600 mt-4'> 4  - 31 Januar 2024 </h1>
                </div>
            </div>

          </div>
    
     
        
    )
}