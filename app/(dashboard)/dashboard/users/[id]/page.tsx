import React from "react";

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div>
      <h1>User Details for User ID: {id}</h1>
      <p>This is the detailed page for user with ID {id}.</p>
    </div>
  );
};
export default UserDetails;
