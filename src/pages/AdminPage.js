import React from "react";

function AdminPage() {

  // TODO: get users from DB

  const UsersTestData = [
    {
      firstName: "First name",
      lastName: "Last name",
      email: "Online",
      phone: "123456789",
      accountType: "Student/Tutor",
    }
  ];

 function Users() {
  return(
    <>
      {UsersTestData.map((user, index) => (
        <tr key={index}>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.accountType}</td>
        </tr>
      ))}
    </>
  )
 }

  return (
    <>
      <div className="dashboard-div-container">
        <h2>Admin dashboard</h2>
        <h3>List of users</h3>
        <table className="dashboard-table">
          <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
            <th>ACCOUNT TYPE</th>
          </tr>
          <Users />
        </table>
      </div>
    </>
  );
}

export default AdminPage;
