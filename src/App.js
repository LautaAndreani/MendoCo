import Header from "./components/Header/Header.jsx";
import Search from "./components/Search/Search";
import Suggest from "./components/Suggest/Suggest";
import SearchAPI from "./components/Search/SearchAPI";
import Form from "./components/FormAdd/Form";
import SuggestProvider from "./Context/SuggestsContext";
import SearchProvider from "./Context/SearchContext";
import FormProvider from "./Context/FormContext";
import GlobalStyle from "./GlobalStyle";
import { Container } from "./App.styles";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <SuggestProvider>
      <SearchProvider>
        <FormProvider>
          <Container>
            <Header />
            <Search />
            <SearchAPI />
            <Suggest />
            <Form />
            <Footer />
          </Container>
        </FormProvider>
        <GlobalStyle />
      </SearchProvider>
    </SuggestProvider>
  );
}

export default App;
