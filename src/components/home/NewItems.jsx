import React, { useEffect, useState } from "react";
import Service from "../../service/service";
import OwlCarousel from "react-owl-carousel";
import Skeleton from "../UI/Skeleton";
import Card from "../UI/Card";

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();

  const getNewItems = async () => {
    setLoading(true);
    try {
      const data = await Service.fetchNewItems();
      setLoading(false);
      setItems(data);
    } catch (error) {
      console.error("Error getting new items", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewItems();
  }, []);

  const settings = {
    loop: true,
    margin: 10,
    nav: true,
    items: 4,
    dots: false,
    responsive: {
      1200: { items: 4 },
      992: { items: 3 },
      768: { items: 2 },
      0: { items: 1 },
    },
  };

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {!loading && items.length > 0 ? (
            <OwlCarousel className="owl-carousel" {...settings}>
              {items.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </OwlCarousel>
          ) : (
            new Array(4).fill(0).map((_, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                <div className="nft__item">
                  <div className="author_list_pp">
                    <Skeleton width={50} height={50} borderRadius={9999} />
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft__item_wrap">
                    <Skeleton width="100%" height="70%" borderRadius={10} />
                  </div>
                  <div className="nft__item_info">
                    <Skeleton width="70%" height={20} />

                    <div className="nft__item_price">
                      <Skeleton width="40%" height={20} />
                    </div>
                    <div className="nft__item_like">
                      <Skeleton width={40} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default NewItems;
