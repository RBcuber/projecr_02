interface Props {
  title: string;
  price: number;
  image: string;
}

function ProductCard(props: Props) {
    const {title, price, image} = props;

    return(
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title}/>
            <p>{price}$</p>
        </div>
    )
}

export default ProductCard;