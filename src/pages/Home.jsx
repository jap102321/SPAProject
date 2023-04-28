import ListCategories from "../Components/ListCategorias/ListCategories";
import ListPost from "../Components/ListPosts/ListPost";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ListPost url={"/posts"} />
    </main>
  );
};

export default Home;
