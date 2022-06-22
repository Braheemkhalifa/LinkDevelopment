import CalendarIcon from 'components/Icons/CalendarIcon';
import ShareIcon from 'components/Icons/ShareIcon';
import WishlistIcon from 'components/Icons/WishlistIcon';
import useDateFormat from 'hooks/useDateFormat';
import useGetCategoryTitle from 'hooks/useGetCategoryTitle';

type Props = {
  title: string;
  image: string;
  date: string;
  categoryID: number;
  categories;
};
const NewsCard = ({ title, image, date, categoryID, categories }: Props) => {
  return (
    <div className="news-card">
      <div className="image">
        <div
          className="img cover"
          style={{
            background: 'url(' + image + ')'
          }}
        ></div>
      </div>

      <div className="content">
        <div className="title-wrapper">
          <h1 className="title">{title}</h1>
        </div>
        <div className="date-wrapper">
          <CalendarIcon />
          <span>{useDateFormat(date)}</span>
        </div>
        <div className="meta-wrapper">
          <span className="category">{useGetCategoryTitle(categories, categoryID)}</span>
          <div className="actions">
            <button>
              <WishlistIcon />
            </button>
            <button>
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
