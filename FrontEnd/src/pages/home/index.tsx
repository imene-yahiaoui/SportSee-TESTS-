import HomeComposent from "./homeComposent.tsx";
import "./style.css";
import WithLoader from "../../helpers/withLoader";
interface HomeProps {}

const HomeWhitLoader = WithLoader(HomeComposent);
const Home: React.FC<HomeProps> = () => {
  return (
    <div>
      <HomeWhitLoader />
    </div>
  );
};

export default Home;
