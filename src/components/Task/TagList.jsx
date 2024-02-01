import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getRandomColor } from "../../utils/getColor";

const TagList = ({ tags }) => {
  const [tagColors, setTagColors] = useState({});

  useEffect(() => {
    // Generate and store colors for each tag
    const colors = {};
    tags.forEach((tag) => {
      colors[tag] = getRandomColor();
    });
    setTagColors(colors);
  }, [tags]);

  return (
    <>
      <ul className="flex justify-center gap-1.5 flex-wrap">
        {tags.map((tag, index) => (
          <li key={index}>
            <span
              className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${
                tagColors[tag] || getRandomColor()
              } px-2.5 text-sm capitalize text-[#F4F5F6]`}
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
  tags: PropTypes.array.isRequired,
};

export default TagList;
