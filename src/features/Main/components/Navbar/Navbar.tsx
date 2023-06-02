import { useEffect } from "react";

import { getCatsCategories } from "../../../Cats/services/apiService";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setCurrentPage, setSelectedCategoryId } from "../../../Cats/reducer";

import "./Navbar.scss";

export const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { catsCategories, selectedCategoryId } = useAppSelector(
    (state) => state.cats
  );

  useEffect(() => {
    dispatch(getCatsCategories());
  }, []);

  const renderCatsCategories = () => {
    return catsCategories?.map((category) => (
      <div
        className={`category-link ${
          selectedCategoryId === category.id ? "selected" : ""
        }`}
        key={category.id}
        onClick={() => {
          dispatch(setSelectedCategoryId(category.id));
          dispatch(setCurrentPage(1))
        }}
      >
        {category.name}
      </div>
    ));
  };

  return (
    <div className="home-container">
      <div className="">
        <div className="categories">{renderCatsCategories()}</div>
      </div>
    </div>
  );
};
