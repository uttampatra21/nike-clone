const Filter = () => {
    return <div id="filters-control">
    <div className="flex gap-10 justify-end">
      <div className="flex items-center gap-4">
        <span className="text-xl">Hide Filters</span>{" "}
        <svg
          aria-hidden="true"
          class="icon-filter-ds"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="30px"
          height="30px"
          fill="none"
        >
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="M21 8.25H10m-5.25 0H3"
          ></path>
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clip-rule="evenodd"
          ></path>
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="M3 15.75h10.75m5 0H21"
          ></path>
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clip-rule="evenodd"
          ></path>
        </svg>{" "}
      </div>
      <div className="flex items-center">
        <span className="text-xl">Short By</span> <i class="bx pt-1 text-3xl bx-chevron-down"></i>
      </div>
    </div>
  </div>
}

export default Filter;