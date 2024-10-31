import React from "react";

import { PhoneIncoming, PhoneMissed } from "lucide-react";

import "./styles.css";

const CallsHistory = () => {
  return (
    <div className="calls container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 pt-15">
          <ul className="calls__menu">
            <div className="calls__divider" />

            <li className="calls__item calls__item--incoming-call">
              <div className="w-100 d-flex flex-row">
                <div className="calls__icon">
                  <PhoneIncoming />
                </div>
                <div className="">
                  <p className="calls__date">16:34, 8 de abr 2023</p>
                  <p className="calls__info">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed dolorum voluptatem quaerat tempora eveniet perspiciatis cupiditate inventore officiis sint perferendis. Eligendi, deserunt! Qui nulla ullam ut at saepe facilis corporis.
                    Nulla neque, nisi aliquam corporis architecto saepe incidunt quam totam, voluptatum fuga, quisquam doloremque nemo pariatur corrupti exercitationem. Eveniet voluptates libero quas aliquid, nostrum minima natus voluptas necessitatibus corrupti aut.
                  </p>
                  <p className="calls__info">
                    Nota: Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </li>

            <li className="calls__item">
              <div className="w-100 d-flex flex-row">
                <div className="calls__icon">
                  <PhoneMissed />
                </div>
                <div className="">
                  <p className="calls__date">16:34, 8 de abr 2023</p>
                  <p className="calls__info">
                    O cliente não atendeu a chamada.
                  </p>
                  <p className="calls__info">
                    Nota: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                </div>
              </div>
            </li>

            <li className="calls__item">
              <div className="w-100 d-flex flex-row">
                <div className="calls__icon">
                  <PhoneMissed />
                </div>
                <div className="">
                  <p className="calls__date">16:34, 8 de abr 2023</p>
                  <p className="calls__info">
                    O cliente não atendeu a chamada.
                  </p>
                  <p className="calls__info">
                    Nota: Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CallsHistory;
