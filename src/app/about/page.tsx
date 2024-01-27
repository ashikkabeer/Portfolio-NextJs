import { InfiniteMovingCardsDemo } from '@/components/InfiniteCards';
import Hero from './Hero';
export default function About() {
  return (
    <div>
      <div className='h-screen flex flex-col items-center justify-center mt-11'>
        <InfiniteMovingCardsDemo />
      </div>
    <div className="m-0">
      <Hero />

    </div>
    </div>
  );
}
