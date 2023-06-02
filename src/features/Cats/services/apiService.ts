import { AppDispatch } from "../../../store/store";
import { request } from "../../Common/services/request";
import { setCatsCategories, setCatsData, setIsLoading } from "../reducer";

export const getCatsData = (category: number | null, page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    let isCategoryExist = category ? `&category_ids=${category}` : null;
    try {
      const { data } = await request({
        endPoint: `/images/search?limit=10&page=${page}${isCategoryExist}`,
      });
      dispatch(setCatsData(data));
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
};

export const getCatsCategories = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    try {
      const { data } = await request({
        endPoint: `/categories`,
      });
      dispatch(setCatsCategories(data));
    } catch (err) {
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
