import { SpotlightPreview } from '@/components/Spotlight';
import { MeteorsDemo } from '@/components/Meteor';

export default function Home() {
  return (
    <main className='overflow-x-hidden flex min-h-screen flex-col items-center justify-between'>
      <div className='w-full h-auto md:align-middle md:items-center'>
        <SpotlightPreview />
      </div>
      <div className='hidden md:flex '>
        <div className=''>
          <MeteorsDemo />
        </div>
      </div>
    </main>
  );
}
