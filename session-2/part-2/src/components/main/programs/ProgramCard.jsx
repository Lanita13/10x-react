import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #26a69a;
  border-radius: 5px;
`;

function ProgramCard({ title, children }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{children}</p>
    </Card>
  );
}

export default ProgramCard;
