import "./LoadMore.scss";

interface LoadMoreProps {
  onLoadMore: () => void;
  isLoading: boolean;
}

const LoadMore: React.FC<LoadMoreProps> = ({ onLoadMore, isLoading }) => {
  return (
    <div className="load-more-container">
      <button
        className="load-more-button"
        onClick={onLoadMore}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMore;
