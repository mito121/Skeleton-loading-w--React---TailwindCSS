import React, { useState, useEffect } from "react";
import axios from "axios";
import { Transition } from "@tailwindui/react";

import User from "../components/User";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const newArr = [...users];

      axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          const obj = res.data[i];
          newArr.push(obj);
        }
        setUsers(newArr);
        setLoading(false);
      });
    }, 2000);
  }, []); // Empty array as 2nd param, to run only onMount

  /* function getData() {
    const newArr = [...users];

    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        const obj = res.data[i];
        newArr.push(obj);
      }
      setUsers(newArr);
    });
  } */

  function renderUsers() {
    return users.map((user) => (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
      />
    ));
  }

  function handleLoad() {
    if (loading) {
      return { display: "block" };
    } else {
      return { display: "none" };
    }
  }

  return (
    <>
      <Transition
        appear={true}
        show={true}
      >
        <div className="flex flex-col m-10">
          {/* Loading gif */}
          <img
            style={handleLoad()}
            className="loading"
            src="https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif"
          />

          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <!-- Table rows go here! --> */}
                    {renderUsers()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
