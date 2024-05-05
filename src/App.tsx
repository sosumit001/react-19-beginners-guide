/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useTransition } from "react"
import UserTable from "./components/@ui/table"
import Button from "./components/@ui/button"

type TUser = {
	id: number,
	name: string
}

const App = () => {

	const [users, setUsers] = useState<TUser[] | null>(null)
	const [username, setUsername] = useState<string | null>(null) 
	const [isPending, startTransition] = useTransition()

	const handleAddUser = () => {
		startTransition(async  () => {
			if (!username) {
				alert("Username cannot be empty");
				return;
			}
			await fetch('http://localhost:3001/users', {
				method: "POST",
				body: JSON.stringify({name: username})
			})
		})
	}
	
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
			<div>
				<input 
				type="text" 
				name="name"
				onChange={(e) => {setUsername(e.target.value)}}
				/>
				<Button/>
			{
				users?
				<UserTable users={users} />
				:
				<p>loading...</p>
			}
			</div>
		</div>
	);
}
 
export default App;