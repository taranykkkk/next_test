import Chart from '@/components/Chart/Chart';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div style={{ padding: '40px' }}>
      <Chart />
    </div>
  );
}
