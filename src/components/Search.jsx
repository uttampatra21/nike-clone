import { NavLink } from "react-router-dom";

const Search = ({ top, setTop }) => {
    
  const closeSearch = () => {
    setTop("-500px");
  };

  return (
    <div
      className="se fixed pl-14 pr-16 left-0 w-full bg-slate-50"
      style={{
        height: "70vh",
        zIndex: "999",
        top: top,
        transition: ".5s top",
      }}
    >
      <div className="flex items-center gap-80 justify-between">
        <div className="large-logo">
          <NavLink to="/">
            <svg
              aria-hidden="true"
              class="pre-logo-svg"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="104px"
              height="104px"
              fill="none"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NavLink>
        </div>

        <div className="search-input flex gap-2 items-center bg-slate-200 w-full  p-3 rounded-full">
          <svg
            aria-hidden="true"
            class="pre-nav-design-icon"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24px"
            height="24px"
            fill="none"
          >
            <path
              stroke="currentColor"
              stroke-width="1.5"
              d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
            ></path>
          </svg>
          <input
            className="w-full text-lg border-0 outline-0 bg-inherit"
            type="text"
            placeholder="Search"
          />
        </div>

        <div
          onClick={closeSearch}
          className="text-xl cursor-pointer font-medium tracking-wide"
        >
          Cancel
        </div>
      </div>
    </div>
  );
};

export default Search;
