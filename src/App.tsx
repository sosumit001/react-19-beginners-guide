<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useActionState, useEffect, useState } from "react"
import UserTable from "./components/@ui/table"
=======
>>>>>>> 7e48df7 (react-actions)

import React from "react"

const App = () => {

<<<<<<< HEAD
	const [users, setUsers] = useState<TUser[] | null>(null)

	const [_error , submitAction, isPending] = useActionState(
		async (_prevState: any, formData: FormData) => {
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
	}, [isPending])
=======
>>>>>>> 7e48df7 (react-actions)

	return (
		<div>
			hello, world
		</div>
	);
}
 
export default App;