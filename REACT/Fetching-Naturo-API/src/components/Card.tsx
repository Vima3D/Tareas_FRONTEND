type CardProps = {
  imgUrl: string;
  name: string;
  birthdate: string;
  clan: string;
};

const Card = ({ imgUrl, name, birthdate, clan }: CardProps) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={imgUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text mb-1">
          <strong>Cumpleaños:</strong> {birthdate}
        </p>
        <p className="card-text">
          <strong>Clan:</strong> {clan}
        </p>
      </div>
    </div>
  );
};

export default Card;
