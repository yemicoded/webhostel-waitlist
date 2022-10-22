import React from "react";
import { clx } from "../utils/clx";

export default function Header({
      classname,
      children
}) {
      const classes = clx(
            "shadow-md px-6 py-2",
            classname
      )
      return (
            <div className={classes}>
                  <div className="w-[120px] lg:w-fit">
                        <img src="/images/logo.png" alt="" />
                  </div>
            </div>
      )
}