import Link from 'next/link';
import React from 'react';

function ProductsPage({ data }) {
  return (
    <div
      style={{
        padding: 'clamp(15px, 0.547rem + 1.95vw, 40px)',
        height: '100%',
      }}>
      <h1
        style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '20px' }}>
        Products
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {data.map((elem, i) => (
          <div
            key={i}
            style={{
              backgroundColor: 'pink',
              width: '100%',
              height: '300px',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
            }}>
            <Link href={`products/${elem.slug}`} style={{ fontSize: '60px' }}>
              {elem.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_MF);

    const productsData = await res.json();
    const { data } = productsData;

    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}

export default ProductsPage;
