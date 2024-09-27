interface IProps {
  image: string;
  title: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
}

export default function Product(props: IProps) {
  const { image, title, price, rating, description } = props;

  return (
    <div>
      <section className="details">
        <article className="details_thumbnail">
          <img style={{ maxWidth: "10%" }} src={image} />
        </article>
        <article className="details_content">
          <h2>{title}</h2>
        </article>
        <article className="details_info">
          <span className="details_price">€{price}</span>
          <span className="details_rate">{rating.rate}</span>
        </article>
        <article className="details_description">
          <p>{description}</p>
        </article>
      </section>
    </div>
  )
}
