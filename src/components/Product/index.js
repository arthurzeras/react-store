import './product.css';

export default function Product({ product }) {
  const formatPrice = ({ decimals, integers }) => {
    decimals = Number(decimals);
    integers = Number(integers.replace(/\./g, ''));
    const price = Number(`${integers}.${decimals}`);

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const renderOldPrice = () => {
    if (!product.price.from) return null;

    return (
      <small className="product__info--price__old">
        {formatPrice(product.price.from)}
      </small>
    );
  };

  const renderInstallments = () => {
    if (!product.installment) return null;

    const [integers, decimals] = product.installment.value.split(',');
    const price = formatPrice({ integers, decimals });

    return (
      <small className="product__info--price__installment">
        <strong>{product.installment.amount}</strong>x de
        <strong>{price}</strong> s/juros
      </small>
    );
  };

  const renderOfferLabel = () => {
    if (!product.offer) return null;

    return (
      <div className="product__offer-label">
        <span>{product.offer.label}</span>
        <span>{product.offer.value}%</span>
      </div>
    );
  };

  const renderTag = () => {
    if (!product.tag) return null;

    return <span className="product__tag">{product.tag.label}</span>;
  };

  const includeOfferClass = (offer) => {
    const defaultClassName = 'product';

    if (!offer) return defaultClassName;

    return `${defaultClassName} product-in-offer`;
  };

  return (
    <div className={includeOfferClass(product.offer)} title={product.name}>
      {renderTag()}

      <img
        alt={product.name}
        src={product.picture}
        className="product__picture"
      />

      {renderOfferLabel()}

      <div className="product__info">
        <div className="product__info--name">{product.name}</div>

        <button className="product__info--button">Adicionar ao Carrinho</button>

        <div className="product__info--price">
          <strong className="product__info--price__main">
            {formatPrice(product.price.to)} {product.unit}
          </strong>
          {renderOldPrice()}
          {renderInstallments()}
        </div>
      </div>
    </div>
  );
}
