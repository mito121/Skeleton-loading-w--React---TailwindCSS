import React, { useState } from "react";
import { Transition } from "@tailwindui/react";

export default function User(props) {
  const [id] = useState(props.id);
  const [name] = useState(props.name);
  const [username] = useState(props.username);
  const [email] = useState(props.email);

  return (
    <>
      <tr className="bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          <Transition.Child
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            {id}
          </Transition.Child>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <Transition.Child
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            {name}
          </Transition.Child>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <Transition.Child
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            {username}
          </Transition.Child>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <Transition.Child
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            {email}
          </Transition.Child>
        </td>
      </tr>
    </>
  );
}
