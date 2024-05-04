import React, { CSSProperties } from 'react';

interface User {
  id: number;
  name: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const tableStyle: CSSProperties = {
    borderCollapse: 'collapse',
    width: '100%'
  };

  const thTdStyle: CSSProperties = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left'
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thTdStyle}>ID</th>
          <th style={thTdStyle}>Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td style={thTdStyle}>{user.id}</td>
            <td style={thTdStyle}>{user.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
