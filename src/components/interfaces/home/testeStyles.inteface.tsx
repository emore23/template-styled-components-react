import React from "react";

import { Container } from "./testeStyles.styles";
import { P } from "../../../styles/theme";
import Form from "../form/form.interface";

const Home: React.FC = () => {
  return (
    <Container>
      <P>OI FORMULARIO E TESTE DE STYLED COMPONENTS</P>

      <Form />
    </Container>
  );
};

export default Home;
