import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
  border-left: 4px solid #004d40;
  border-radius: 5px;

  img {
    width: 60px;
    border-radius: 50%;
  }
`;

 function TrainerCard({name, role, img}){
    return(
        <Card>
            <img src={img} alt={name} />
            <div>
                <h4>{name}</h4>
                <p>{role}</p>
            </div>
        </Card>
    )
 }

 export default TrainerCard;