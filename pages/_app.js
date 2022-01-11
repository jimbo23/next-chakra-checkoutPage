import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import "../theme/styles.css";

const App = ({ Component, PageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...PageProps} />
    </ChakraProvider>
  );
};

export default App;
