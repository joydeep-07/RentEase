import React from "react";
import { data } from "../utils/data";
import AdminItemCards from "./AdminItemCards";

const Allitem = () => {
  return (
    <div>

      <div className="p-6 md:px-15">
        <AdminItemCards items={data} />
      </div>
    </div>
  );
};

export default Allitem;
