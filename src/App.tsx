import React, { useActionState, useEffect, useState } from "react"
import UserTable from "./components/@ui/table"

type TUser = {
	id: number,
	name: string
}

const App = () => {

	const [users, setUsers] = useState<TUser[] | null>(null)

	const [error, submitAction, isPending] = useActionState(
		async (prevState: any, formData: FormData) => {
			const username = formData.get("name")
			if (!username) {
				alert("Username cannot be empty");
				return;
			  }
			await fetch('http://localhost:3001/users', {
				method: "POST",
				body: JSON.stringify({name: username})
			})
		},
		null
	)
	
	const fetchUserData = async () => {
		const response = await fetch('http://localhost:3001/users')
		const data = await response.json()
		setUsers(data)
	}

	useEffect(() => {
		fetchUserData()
		console.log(isPending)
	}, [isPending])

	return (
		<div>
			<h1>React 19 : Actions</h1>
			{/* User's Table */}
			<form action={submitAction}>
				<input 
				type="text" 
				name="name"
				/>
				<button type="submit" disabled={isPending}>Add User</button>
			{
				users?
				<UserTable users={users} />
				:
				<p>loading...</p>
			}
			</form>
		</div>
	);
}
 
export default App;