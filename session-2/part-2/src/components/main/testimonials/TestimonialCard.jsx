import styled from "styled-components";

const Box = styled.div`
  margin-bottom: 20px;
  font-style: italic;
`;

function TestimonialCard({ children, author }) {
  return (
    <Box>
      <p>{children}</p>
      <p>{author}</p>
    </Box>
  );
}

export default TestimonialCard;
