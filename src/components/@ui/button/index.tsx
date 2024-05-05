
import { useFormStatus } from "react-dom";

const Button = () => {
	const {pending} = useFormStatus()

	return (
		<button type="submit" disabled={pending}>Add User</button>
	);
}
 
export default Button;