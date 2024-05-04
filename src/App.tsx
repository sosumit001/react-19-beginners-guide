/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useActionState, useEffect, useRef, useState } from "react"
import UserTable from "./components/@ui/table"

type TUser = {
	id: number,
	name: string
}

const App = () => {

	const [users, setUsers] = useState<TUser[] | null>(null)
	const [username, setUsername] = useState<string>("")

	const [_error, submitAddUser, isPending] = useActionState(
		async (_prevState: any, form: FormData) => {
			if (!username) {
				alert("Username cannot be empty");
				return;
			}
			const res = await fetch('http://localhost:3001/users', {
				method: "POST",
				body: JSON.stringify({name: form.get("name")})
			})
			if(res.ok) {
				setUsername("")
			}
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
	}, [isPending])

	return (
		<div>
			<h1>React 19 : Actions</h1>
			{/* User's Table */}
			<form action={submitAddUser}>
				<input 
				type="text" 
				name="name"
				value={username}
				onChange={(e) => {setUsername(e.target.value)}}
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