import Chart from '@/components/Chart/Chart';
import FlowerProductCard from '@/components/FlowerProductCard/FlowerProductCard';
import MostCommonQuestions from '@/components/MostCommonQuestions/MostCommonQuestions';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      {/* <Chart /> */}
      <MostCommonQuestions />
    </div>
  );
}
