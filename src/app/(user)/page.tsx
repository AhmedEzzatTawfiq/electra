import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Facilities from "../../components/Facilities";
import Products from "../../components/Products";

export default function Home() {
  return (
    <Container className="py-10">
      <Banner />
      <Facilities />
      <Products />
    </Container>
  );
}
