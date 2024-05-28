import Link from 'next/link';
import styles from './ParametersProducts.module.scss';
import classNames from 'classnames';
import { useSearchParams } from 'next/navigation';

const parametersProduct = [
  { title: 'Колір', parameters: ['Рожевий', 'Білий', 'Червоний'] },
  { title: 'Висота' },
  { title: 'Класс', parameters: ['Преміум', 'Стандарт'] },
];

function ParametersProduct({ productData }) {
  const { sizes, slug, defaultSize, size_id } = productData;

  const searchParams = useSearchParams();
  const currentSize = searchParams.get('size') || defaultSize;

  return (
    <div className={styles.flower_other_description}>
      <div className={styles.flower_params}>
        <h5>{parametersProduct[0].title}</h5>
        <div className={styles.flower_params_container}>
          {parametersProduct[0].parameters.map((param, i) => (
            <Link href="/" key={i} className={styles.flower_params_link}>
              {param}
            </Link>
          ))}
        </div>
      </div>
      {size_id && (
        <div className={styles.flower_params}>
          <h5>{parametersProduct[1].title}</h5>
          <div className={styles.flower_params_container}>
            {sizes.map((param) => (
              <Link
                className={classNames(styles.flower_params_link, {
                  [styles.active]: param.slug === currentSize,
                })}
                href={`${slug}?size=${param.slug}`}
                key={param.id}>
                {param.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className={styles.flower_params}>
        <h5>{parametersProduct[2].title}</h5>
        <div className={styles.flower_params_container}>
          {parametersProduct[2].parameters.map((param, i) => (
            <Link href="/" key={i} className={styles.flower_params_link}>
              {param}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ParametersProduct;
