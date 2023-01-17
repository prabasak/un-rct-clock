import React, { useState } from "react";

function Clock() {
  // const [<state variable>, <state update function>] = useState(<initial value>);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  setInterval(() => setCurrentDateTime(new Date()), 1000);

  return (
    <div>
      <p>The current time is {currentDateTime.toString()}</p>
    </div>
  );
}

export default Clock;
