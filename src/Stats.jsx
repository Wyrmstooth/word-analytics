function Stats({ numOfCharacters, numOfWords }) {
  return (
    <section className="stats">
      <Stat number={numOfWords} heading={"Words"} />
      <Stat number={numOfCharacters} heading={"Characters"} />
      <Stat number={280 - numOfCharacters} heading={"Instagram"} />
      <Stat number={2200 - numOfCharacters} heading={"Facebook"} />
    </section>
  );
}

export default Stats;

function Stat({ number, heading }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{heading}</h2>
    </section>
  );
}
