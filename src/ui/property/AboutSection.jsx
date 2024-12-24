import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <div className="col-lg-8 col-12 p-2">
      <div className="about_place">
        <div className="host_card">
          <div className="avatar">
            <img src="/avatars/av1.png" alt="host" />
          </div>
          <div className="info">
            <div className="title">
              <h6>Hosted by George</h6>
              <span>
                <img src="/icons/star.svg" alt="star" />
                4.98 (198)
              </span>
            </div>
            <p>11 years hosting</p>
          </div>
        </div>

        <h3>{t("aboutThisPlace")}</h3>
        <p className="desc">
          The house is located in the picturesque village of Cheronissos,
          Sifnos. It consists of a sleeping room, a living room, a kitchen and a
          bathroom. It has a large terrace with stunning views of the bay and
          the beach. You can sunbathe, eat, yoga, having the feeling that you
          are in the sea. The colors that rocks make in the water, the small
          harbour and terrain of the area create the sense of physical pool.
          <br />
          <br />
          The space The house is located on the edge of the beach, has direct
          access to it and it is ideal for families with children and couples.
          <br />
          <br />
          Registration number
          <br /> 00002670423
        </p>
        <span className="line" />

        <div className="features">
          <h3>{t("whatThisPlaceOffer")}</h3>

          <ul>
            <li>Private entrance</li>
            <li>Outdoor furniture</li>
            <li>TV</li>
            <li>Cable channels</li>
            <li>Air conditioning</li>
            <li>Heating</li>
            <li>Sofa</li>
            <li>Wardrobe/Closet</li>
            <li>Shower</li>
            <li>Bathtub</li>
            <li>Free toiletries</li>
            <li>Refrigerator</li>
            <li>Kitchenette</li>
            <li>Microwave</li>
            <li>Dining table</li>
            <li>Electric kettle</li>
            <li>Outdoor dining area</li>
            <li>Towels</li>
            <li>Linens</li>
            <li>Iron</li>
            <li>Ironing board</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
