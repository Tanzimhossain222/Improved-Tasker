import PropsType from "prop-types";
import { getRandomColor } from "../../utils/getColor";

const TagList = ({ tags }) => {
  return (
    <>
      <ul className="flex justify-center gap-1.5 flex-wrap">
        {tags.map((tag, index) => (
          <li key={index}>
            <span
              className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${getRandomColor()} px-2.5 text-sm capitalize text-[#F4F5F6]`}
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

TagList.propTypes = {
  tags: PropsType.array.isRequired,
};

export default TagList;
