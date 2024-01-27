
const TagList = ({tags}) => {

    const colorArray = [
        "#00D991A1",
        "#1C92FFB0",
        "#FE1A1AB5",
        "#BD560BB2",
        "#00B2D9CC",
        "#8407E6A8",
        "#FF8C00B5",
        "#07AC67D6",
        "#10FBEDB2",
        "#AE6D0BDB",
        "#2F43F8BF",
        "#FF0000B5",
        "#FF00FFB5",
      ];

  return (
    <>
      <ul className="flex justify-center gap-1.5 flex-wrap">
        <li>
          <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00B2D9CC] px-2.5 text-sm capitalize text-[#F4F5F6]">
            Web
          </span>
        </li>
        <li>
          <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#8407E6A8] px-2.5 text-sm capitalize text-[#F4F5F6]">
            Python
          </span>
        </li>
        <li>
          <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#07AC67D6] px-2.5 text-sm capitalize text-[#F4F5F6]">
            API
          </span>
        </li>
      </ul>
    </>
  );
};

export default TagList;
