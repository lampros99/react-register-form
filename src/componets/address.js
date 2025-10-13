

function Address({ formData, setFormData }) {
  return (
    <div>
      <h2>Address</h2>
      <input
        placeholder="Street"
        value={formData.street}
        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
        required
      />
      <input
        placeholder="City"
        value={formData.city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        required
      />
    </div>
  );
}

export default Address;