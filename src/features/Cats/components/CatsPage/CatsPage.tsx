import { useEffect } from "react";

import CatCard from "../CatCard/CatCard";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { RootState } from "../../../../store/store";
import { getCatsData } from "../../services/apiService";

import { Loading } from "../../../Common/components/Loading/Loading";

import "./CatsPage.scss";

export const CatsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cats, isLoading } = useAppSelector((state: RootState) => state.cats);

  const renderCatsImages = () => {
    return cats.map((el) => {
      return <CatCard catData={el} key={el.id} />;
    });
  };
  
  // useEffect(() => {
  //   dispatch(getCatsData("1", 1));
  // }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="imageWrapper">{renderCatsImages()}</div>
      )}
    </>
  );
};
