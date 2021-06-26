import * as React from "react";
import Paragraph from "@Components/Paragraph";
import ContainerBox from "@Components/ContainerBox";

export default function footer() {
  return (
    <footer className="footer">
      <div style={{ padding: "0 1rem" }}>
        <ContainerBox>
          <div
            style={{ padding: "3rem 0 4rem", borderTop: "1px solid #eaeaea" }}
          >
            <Paragraph style={{ textAlign: "center" }}>
              Copyright © {new Date().getFullYear()} Eduardo Rodriguez. All
              rights reserved.
            </Paragraph>
          </div>
        </ContainerBox>
      </div>
    </footer>
  );
}
