import React, { useState, useContext } from "react";
import { bakeyContext } from "../Context";

export default function DashboardUser() {
  const { userName } = useContext(bakeyContext);
  return (
    <div>
      <header>
        <h2>Hello {userName}</h2>
      </header>
      <main>
        <p>You successfully logged-in as a user and this is your dashboard. </p>
      </main>
    </div>
  );
}
