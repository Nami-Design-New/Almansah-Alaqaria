import StarsRate from "../StarsRate";

export default function RateCard() {
  return (
    <div className="rate_card">
      <div className="user">
        <div className="icon">
          <img src="/avatars/av2.png" alt="" />
        </div>
        <div className="info">
          <h6>Phoebe John</h6>
          <span>
            <StarsRate rate={5} /> 2 months ago
          </span>
        </div>
      </div>
      <div className="comment">
        <p>
          Georgia’s place was wonderful! We could have stayed for weeks and
          never left Cherronisos beach. The apartment has everything you could
          need including beach toys and snorkels and we could watch the kids
          playing and swimming and snorkelling from the house. Heaven! We can’t
          wait to come back.
        </p>
      </div>
    </div>
  );
}
