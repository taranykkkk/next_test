import FlowerProductCard from '@/components/FlowerProductCard/FlowerProductCard';

function ProductsPage({ productData }) {
  return (
    <div style={{ padding: '40px' }}>
      <FlowerProductCard productData={productData} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const defaultSize = query.size ? query.size : '';
  const productPath = query.slug ? query.slug : '';

  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_BACKEND_MF}/${productPath}`);
    const params = { size: defaultSize };
    url.search = new URLSearchParams(params).toString();

    const res = await fetch(url);
    const data = await res.json();

    const {
      sizes,
      slug,
      images,
      price,
      size_slug,
      size_id,
      sku,
      name,
      description,
    } = data.product;

    const productData = {
      sizes: sizes.sort((a, b) => a.height - b.height),
      slug,
      defaultSize: size_slug,
      image: images[0].sizes.medium,
      price,
      size_id,
      sku,
      name,
      description,
    };

    return { props: { productData } };
  } catch (error) {
    console.log(error);
  }
}

export default ProductsPage;
