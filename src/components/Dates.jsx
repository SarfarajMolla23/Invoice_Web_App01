import React from "react";

export default function Dates() {
  return (
    <>
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li>
            <span className="font-bold">Invoicer number:</span>
          </li>
          <li>
            <span className="font-bold">Invoice date:</span>
          </li>
          <li>
            <span className="font-bold">Due date:</span>
          </li>
        </ul>
      </article>
    </>
  );
}
