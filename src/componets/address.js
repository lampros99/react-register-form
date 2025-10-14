import { useForm } from "react-hook-form";

function Address({ formData, setFormData, onNext, onPrevious }) {
  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data});
    onNext();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Address</h2> 
      <div className="input-group">
      <input
        placeholder="Street"
        {...register("street", { required: "Street is required" })}
        />
        {errors.street && <p className="error">{errors.street.message}</p>}
      </div>

      <div className="input-group">
      <input
        placeholder="City"
        {...register("city", { required: "City is required" })}
      />
      {errors.city && <p className="error">{errors.city.message}</p>}
      </div>
    
      <div className="buttons">
        <button type="button" onClick={onPrevious}>Previous</button>
        <button type="submit" className="button" >Next</button>
      </div>
    </form>
  );
}

export default Address;