import PropTypes from "prop-types";
import { BsArrowUpRight } from "react-icons/bs";

const CategoryCard = ({ icons, title }) => {
  return (
    <div className="category-card bg-white md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-secondary hover:cursor-pointer group/edit">
      <div className="flex gap-4">
        {icons}
        <h1 className="md:max-w-[200px] max-w-[70px] truncate md:text-2xl text-lg font-semibold absolute ml-10">
          {title}
        </h1>
      </div>

      <div className=" rounded-lg p-3">
        <BsArrowUpRight size={30} className="arrow-icon !text-secondary" />
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  icons: PropTypes.node, // Can be any renderable React node
  title: PropTypes.string.isRequired, // Ensures title is required and a string
};

export default CategoryCard;
