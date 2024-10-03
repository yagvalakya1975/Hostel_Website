const Warden = ({ warden }) => {
  const makePhoneCall = () => {
    window.location.href = `tel:${warden.phone}`; // Replace with your phone number
  };

  const mailto = () => {
    window.location.href = `mailto:${warden.email}`;
  };

  return (
    <div className="warden-article">
      <img src={warden.src} alt="" />
      <div className="warden-name">
        <p>{warden.name.toUpperCase()}</p>
      </div>
      <div className="warden-position">
        <p>{warden.position.toUpperCase()}</p>
      </div>
      <div className="warden-details">
        <h2>EMAIL</h2>
        <p onClick={mailto}>{warden.email.toUpperCase()}</p>
        <h2>PHONE</h2>
        <p onClick={makePhoneCall}>{warden.phone}</p>
      </div>
    </div>
  );
};

export default Warden;
