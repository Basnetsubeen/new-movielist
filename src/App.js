import { Container } from "react-bootstrap";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import CustomCard from "./Components/CustomCard";
import MovieList from "./Components/MovieList";

const App = () => {
  return (
    <div className="wrapper">
      <Container>
        <SearchForm />
        <div className="mt-4 d-flex justify-content-center">
          {" "}
          <CustomCard />
        </div>

        <hr />
        <MovieList />
      </Container>
    </div>
  );
};

export default App;
