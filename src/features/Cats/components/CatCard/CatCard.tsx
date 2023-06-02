import { ICatsData } from "../../interfaces";
import "./CatCard.scss";

interface ICatCard {
  catData: ICatsData;
}

export const CatCard: React.FC<ICatCard> = ({ catData }) => {
  return (
    <div className="cat-card">
      <img
        className="cat-card__image"
        src={catData.url}
        alt={catData.id}
        width={"200px"}
        height={"200px"}
      />
    </div>
  );
};

export default CatCard;
