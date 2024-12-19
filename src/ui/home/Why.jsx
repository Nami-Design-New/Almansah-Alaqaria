import { useTranslation } from "react-i18next";

export default function Why() {
  const { t } = useTranslation();
  const features = [
    {
      icon: "/icons/saftey.svg",
      title: t("features.title1"),
      description: t("features.description1"),
    },
    {
      icon: "/icons/payment.svg",
      title: t("features.title2"),
      description: t("features.description2"),
    },
    {
      icon: "/icons/support.svg",
      title: t("features.title3"),
      description: t("features.description3"),
    },
    {
      icon: "/icons/reviews.svg",
      title: t("features.title4"),
      description: t("features.description4"),
    },
    {
      icon: "/icons/smartSearch.svg",
      title: t("features.title5"),
      description: t("features.description5"),
    },
    {
      icon: "/icons/session360.svg",
      title: t("features.title6"),
      description: t("features.description6"),
    },
  ];

  return (
    <section className="why_us">
      <div className="img">
        <img src="/images/why.png" alt="why" />
      </div>
      <div className="content">
        <h3>{t("whyTitle")}</h3>
        <p>{t("whyDesc")}</p>
        <div className="features">
          {features.map((feature, index) => (
            <div className="feature_card" key={index}>
              <div className="icon">
                <img src={feature.icon} className="to_dark" alt="feature" />
              </div>
              <div className="feature_content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
