import React from "react";

import Card from "../../../../../components/Card";

import "./styles.css";

const AnnotationsCard = () => {
  return (
    <div className="x-p-15 y-p-15 pt-0">
      <Card>
        <table className="annotation__table">
          <tbody className="annotation__body">
            <tr className="annotation__row">
              <td className="annotation__table-data">
                <div className="d-flex flex-row">
                  <div className="mr-15">
                    <div className="avatar avatar--super-sm">
                      <img
                        alt="Profile user information"
                        src="https://pbs.twimg.com/media/EbRZ0YAU8AEY7KJ.jpg"
                        className="avatar__img"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-5">
                      <span className="mr-5 text-color">Klebson</span>
                      <span className="text-color text-grey-color">
                        12/12/2012
                      </span>
                    </div>
                    <p className="text-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="annotation__row">
              <td className="annotation__table-data">
                <div className="d-flex flex-row">
                  <div className="mr-15">
                    <div className="avatar avatar--super-sm">
                      <img
                        alt="Profile user information"
                        src="https://pbs.twimg.com/media/EbRZ0YAU8AEY7KJ.jpg"
                        className="avatar__img"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-5">
                      <span className="mr-5 text-color">Mariel</span>
                      <span className="text-color text-grey-color">
                        12/12/2012
                      </span>
                    </div>
                    <p className="text-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec rhoncus congue diam, vel luctus magna tempor quis.
                    </p>
                  </div>
                </div>
              </td>
            </tr>

            <tr className="annotation__row">
              <td className="annotation__table-data">
                <div className="d-flex flex-row">
                  <div className="mr-15">
                    <div className="avatar avatar--super-sm">
                      <img
                        alt="Profile user information"
                        src="https://pbs.twimg.com/media/EbRZ0YAU8AEY7KJ.jpg"
                        className="avatar__img"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="mb-5">
                      <span className="mr-5 text-color">Lucas</span>
                      <span className="text-color text-grey-color">
                        12/12/2012
                      </span>
                    </div>
                    <p className="text-color">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec rhoncus congue diam, vel luctus magna tempor quis.
                    </p>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default AnnotationsCard;
