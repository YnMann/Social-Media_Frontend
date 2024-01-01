import "./e404.scss";

const FatalError = () => {
  return (
    <section className="page_404">
        <div className="error">404</div>
        <br />
        <br />
        <span className="info">File not found</span>
        <img
          src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
          alt="Static Image"
          className="static"
        />
    </section>
  );
};

export default FatalError;
