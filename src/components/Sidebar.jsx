const Sidebar = () => {
  return (
    <div className="overflow-auto">
      <h1 className="text-3xl font-medium">Gifts Basketball Shoes(44)</h1>
      <div className="pr-10 pt-10">
        <div className="flex flex-col gap-8">
          <ul id="sidebar-list" class="flex flex-col gap-4">
            <li>Lifestyle</li>
            <li>Sandals, Slippers & Flip</li>
            <li>Jordan</li>
            <li>Running</li>
            <li>Basketball</li>
            <li>Training & Gym</li>
            <li>Football</li>
            <li>Golf</li>
            <li>Boots</li>
            <li>Tennis</li>
            <li>Walking</li>
          </ul>
          <hr />

          <div className="gender flex flex-col gap-4">
            <div className="flex justify-between">
              <h2>Gender(2)</h2>
              <i class="bx bx-chevron-up"></i>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                {" "}
                <input type="checkbox" name="" id="" />
                <span>Men</span>
              </div>
              <div className="flex gap-3">
                {" "}
                <input type="checkbox" name="" id="" />
                <span>Women</span>
              </div>
              <div className="flex gap-3">
                {" "}
                <input type="checkbox" name="" id="" />
                <span>Unisex</span>
              </div>
            </div>
          </div>

          <hr />

          <div className="kids flex flex-col gap-4">
            <div className="flex justify-between">
              <h2>Kids(2)</h2>
              <i class="bx bx-chevron-up"></i>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                {" "}
                <input type="checkbox" name="" id="" />
                <span>Men</span>
              </div>
              <div className="flex gap-3">
                {" "}
                <input type="checkbox" name="" id="" />
                <span>Women</span>
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
