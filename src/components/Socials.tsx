import Image from 'next/image';

export function Socials() {
  return (
    <div className='flex justify-center'>
      <div className="h-8 w-3/4 md:w-2/4 flex justify-around">
      <Image
        src='/twitter.svg'
        width={500}
        height={500}
        alt='Picture of the author'
      />

      <Image
        src='/github.svg'
        width={500}
        height={500}
        alt='Picture of the author'
      />

      <Image
        src='/linkedin.svg'
        width={500}
        height={500}
        alt='Picture of the author'
      />

      <Image
        src='/medium.svg'
        width={500}
        height={500}
        alt='Picture of the author'
      />
      </div>
    </div>
  );
}
