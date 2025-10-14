
function Confirmation({ formData, onPrevious, onSubmit }) {
  return (
    <div>
      <h2>Confirmation</h2>
      <p>Please review your information before submitting.</p>

      <div className="confirmation-details">
        <h3>User Information</h3>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>

        <h3>Address</h3>
        <p><strong>Street:</strong> {formData.street}</p>
        <p><strong>City:</strong> {formData.city}</p>
      </div>
        <div className="buttons">
        <button type="button" className="button" onClick={onPrevious}>Previous</button>
        <button type="button" className="button" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}


export default Confirmation;