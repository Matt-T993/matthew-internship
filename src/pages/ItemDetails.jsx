import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import nftImage from "../images/nftImage.jpg";
import Service from "../service/service";
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {
  const { nftId } = useParams();
  const [itemDetails, setItemDetials] = useState("");
  const [loading, setLoading] = useState();

  const getItemDetails = async () => {
    try {
      const data = await Service.fetchItemDetails(nftId);
      setLoading(false);
      console.log(data);
      setItemDetials(data);
    } catch (error) {
      console.error("Error getting item detail", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getItemDetails();
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              {!loading && itemDetails != null ? (
                <>
                  <div className="col-md-6 text-center">
                    <img
                      src={itemDetails.nftImage}
                      className="img-fluid img-rounded mb-sm-30 nft-image"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <h2>{itemDetails.title}</h2>

                      <div className="item_info_counts">
                        <div className="item_info_views">
                          <i className="fa fa-eye"></i>
                          {itemDetails.views}
                        </div>
                        <div className="item_info_like">
                          <i className="fa fa-heart"></i>
                          {itemDetails.likes}
                        </div>
                      </div>
                      <p>{itemDetails.description}</p>
                      <div className="d-flex flex-row">
                        <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to={`/author/${itemDetails.ownerId}`}>
                                <img
                                  className="lazy"
                                  src={itemDetails.ownerImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to={`/author/${itemDetails.ownerId}`}>
                                {itemDetails.ownerName}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="de_tab tab_simple">
                        <div className="de_tab_content">
                          <h6>Creator</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to={`/author/${itemDetails.creatorId}`}>
                                <img
                                  className="lazy"
                                  src={itemDetails.creatorImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to={`/author/${itemDetails.creatorId}`}>
                                {itemDetails.creatorName}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="spacer-40"></div>
                        <h6>Price</h6>
                        <div className="nft-item-price">
                          <img src={EthImage} alt="" />
                          <span>{itemDetails.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 text-center">
                    <Skeleton width="100%" height="100%" borderRadius={10} />
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <h2>
                        {" "}
                        <Skeleton width="50%" height={30} borderRadius={10} />
                      </h2>

                      <div className="item_info_counts">
                        <Skeleton width="5%" height={30} borderRadius={10} />

                        <Skeleton width="5%" height={30} borderRadius={10} />
                      </div>
                      <p>
                        {" "}
                        <Skeleton width="100%" height={100} />
                      </p>
                      <div className="d-flex flex-row">
                        <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Skeleton
                                width={50}
                                height={50}
                                borderRadius={9999}
                              />
                              <i className="fa fa-check"></i>
                            </div>
                            <div className="author_list_info">
                              <Skeleton
                                width={100}
                                height={30}
                                borderRadius={10}
                              />
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="de_tab tab_simple">
                        <div className="de_tab_content">
                          <h6>Creator</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Skeleton
                                width={50}
                                height={50}
                                borderRadius={9999}
                              />
                              <i className="fa fa-check"></i>
                            </div>
                            <div className="author_list_info">
                              <Skeleton
                                width={100}
                                height={30}
                                borderRadius={10}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="spacer-40"></div>
                        <h6>Price</h6>
                        <div className="nft-item-price">
                          <img src={EthImage} alt="" />
                          <span>
                            {" "}
                            <Skeleton
                              width={80}
                              height={30}
                              borderRadius={10}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
