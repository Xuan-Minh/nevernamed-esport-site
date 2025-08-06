function CarrousselTeam({ teamMembers }) {
  return (
    <div className="carousel-container">
      <div className="carousel">
        {teamMembers.map((member, index) => (
          <div key={index} className="carousel-item">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CarrousselTeam;