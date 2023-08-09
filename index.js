const Notification = (props) => {
  const { className, url, text } = props;
  return (
    <div className={`card ${className}`}>
      <img className="image-icon" src={url} />
      <p className="card-text">{text}</p>
    </div>
  );
};

const element = (
  <div className="notifications-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-cards-container">
      <Notification
        className="information-card"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information message"
      />
      <Notification
        className="success-card"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success message"
      />
      <Notification
        className="warning-card"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning message"
      />
      <Notification
        className="error-card"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Error message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
