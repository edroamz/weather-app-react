import React from "react";
import Paragraph from "@components/common/paragraph.jsx";
import Container from "@components/common/container.jsx";

export default function footer() {
  return (
    <footer className="footer">
      <Container>
        <div style={{ padding: "3rem 0 4rem" }}>
          <Paragraph style={{ textAlign: "center" }}>
            Copyright © {new Date().getFullYear()} Eduardo Rodriguez. All rights
            reserved.
          </Paragraph>
        </div>
      </Container>
    </footer>
  );
}
