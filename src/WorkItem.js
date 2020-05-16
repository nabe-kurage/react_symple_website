import React from "react";
import styled from "styled-components";
import { colors, poppins } from "./styleHelper";

const Base = styled.li`
  margin: 16px 0;
`;

const Category = styled.p`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  color: ${colors.green};
  line-height: 1;
  letter-spacing: 0.5px;
  margin: 6px 0 2px;
`;

const Title = styled.p`
  font-weight: bold;
`;

const WorkItem = props => {
  return (
    <Base>
      <img
        className="workItem-image"
        src={"https://picsum.photos/id/" + props.id + "/300/200"}
        alt={props.title}
      />
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
    </Base>
  );
};

export default WorkItem;
