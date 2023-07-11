import React, { useState } from "react";
import "./cards.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

function Cards({ card }) {
  const [like, setLike] = useState(false);

  return (
    <div className="card-box text-sm relative">
      <div
        className="absolute top-2 right-2 z-10 cursor-pointer"
        onClick={() => setLike(!like)}
      >
        {like ? (
          <FavoriteOutlinedIcon sx={{ color: "#FFF" }} />
        ) : (
          <FavoriteBorderOutlinedIcon sx={{ color: "#FFF" }} />
        )}
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        // navigation
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="card-info-flex pt-2 font-semibold">
        <h3 className="card-title">{card.country}</h3>
        {card.rating && (
          <div className="card-rating">
            <StarRateRoundedIcon />
            <p>{card.rating}</p>
          </div>
        )}
      </div>
      <p>{card.desc}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>
        {card.dist} kilometers away
      </p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
      <p style={{ fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>${card.price}</span> night
      </p>
    </div>
  );
}

export default Cards;
