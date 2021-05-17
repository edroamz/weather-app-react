import React from "react";
import Paragraph from "@components/common/paragraph.jsx";

export default function footer() {
  return (
    <footer
      className="bg-light-grey"
      style={{ borderTop: "1px solid #eaeaea" }}
    >
      <div>
        <div className="container mx-auto h-full" style={{ padding: "2em 0" }}>
          <div className="grid items-center justify-center text-center">
            <Paragraph>
              Copyright © {new Date().getFullYear()} Eduardo Rodriguez. All
              rights reserved.
            </Paragraph>
          </div>
        </div>
      </div>
    </footer>
  );
}
