import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/actions/greetings';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);
  const greeting = greetings[Math.floor(Math.random()*greetings.length)] || { greeting: "" };
  const dispatch = useDispatch();

  useEffect(() => {
    if (!greetings.length) {
      dispatch(getGreetings());
    }
  });

  console.log(greeting);

  return (
    <>
      {
        greeting.greeting ? (
          greeting.greeting
        ) : (
          <div>Loading...Please wait</div>
        )
      }
    </>
  );
}

export default Greeting
