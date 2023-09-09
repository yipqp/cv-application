import "../styles/ResumeItem.css";

const ResumeItem = () => {
  return (
    <div className="ResumeItem">
      <div className="item-header-cont">
        <h3 className="item-title"></h3>
        <div className="item-date"></div>
      </div>
      <h4 className="secondary-header"></h4>
      <div className="item-body"></div>
    </div>
  );
};

export default ResumeItem;
