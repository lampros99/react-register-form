import { useForm } from "react-hook-form";
import '../index.css'

function UserInformation({ formData, setFormData, onNext }) {

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    onNext();
  }; 
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>User Information</h2>
    <div className="input-group">
      <input
        placeholder="First Name"
        {...register("firstName", { required: "First name is required"})}
      />
      {errors.firstName && <p className="error">{errors.firstName.message}</p>}
      </div>
      <div className="input-group">
      <input
        placeholder="Last Name"
        {...register("lastName", { required: "Last name is required" })}
      />
      {errors.lastName && <p className="error">{errors.lastName.message}</p>}
      </div>
      <div className="input-group">
      <input
        type="email"
        placeholder="Email"
        {...register("email", {required: "Email is required",
          pattern: {value: /^\S+@\S+\.\S+$/, message: "Invalid email"}
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}
    </div>
    <div className="buttons">
       <button type="submit" className="button">Next</button>
      </div>
    </form>
  );
}

export default UserInformation;