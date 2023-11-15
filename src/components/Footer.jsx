import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white p-20">
      <div className="flex justify-between">
        <div className="flex">
          <ul className="flex gap-20">
            <li className="flex flex-col gap-3">
              <h2 className="text-base font-medium">FIND A STORE</h2>
              <h2 className="text-base font-medium">BECOME A MEMBER</h2>
              <h2 className="text-base font-medium">Send Us Feedback</h2>
            </li>
            <li>
              <ul className="flex flex-col gap-3">
                <li className="text-lg font-medium">Get Help</li>
                <li className="opacity6">Get Help</li>
                <li className="opacity6">Get Help</li>
                <li className="opacity6">Get Help</li>
                <li className="opacity6">Get Help</li>
                <li className="opacity6">Get Help</li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-3">
                <li className="text-lg font-medium">Get Help</li>
                <li className="opacity6">Get Help</li>
                <li className="opacity6">Get Help</li>
                <li className="opacity6">Get Help</li>
                <li className="opacity6">Get Help</li>
                <li className="opacity6">Get Help</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex gap-3 media">
            <li>
              <li>
                <i class="bx bxl-twitter"></i>
              </li>
            </li>
            <li>
              <i class="bx bxl-facebook"></i>
            </li>
            <li>
              <i class="bx bxl-youtube"></i>
            </li>
            <li>
              <i class="bx bxl-instagram"></i>
            </li>
          </ul>
        </div>
      </div>

      <div id="copyright" className="flex justify-between pt-20">
        <div className="flex gap-4 items-center">
          <i class="bx bx-location-plus"></i>{" "}
          <span className="text-lg">India</span>{" "}
          <small className="text-slate-300">
            © 2023 Nike, Inc. All Rights Reserved
          </small>
        </div>
        <div className="">
          <ul className="flex gap-6 hov">
            <li className="text-slate-300">Guide</li>
            <li className="text-slate-300">Terms of Sale</li>
            <li className="text-slate-300">Terms of Use</li>
            <li className="text-slate-300">Nike Privicy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
