import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getCatsCategories,
  getCatsData,
} from "../../../Cats/services/apiService";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { Loading } from "../../../Common/components/Loading/Loading";
import CatCard from "../../../Cats/components/CatCard/CatCard";

import "./Home.scss";
import LoadMore from "../LoadMore/LoadMore";
import { setCurrentPage } from "../../../Cats/reducer";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, cats, selectedCategoryId, currentPage } = useAppSelector(
    (state) => state.cats
  );

  useEffect(() => {
    console.log(currentPage,'current')
    dispatch(getCatsData(selectedCategoryId, currentPage));
  }, [selectedCategoryId, currentPage]);

  const renderCatsImages = () => {
    return cats.map((el) => {
      return <CatCard catData={el} key={el.id} />;
    });
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="images">{renderCatsImages()}</div>
      )}
      <LoadMore
        onLoadMore={() => {
          dispatch(setCurrentPage(currentPage + 1));
        }}
        isLoading={isLoading}
      />
    </div>
  );
};
