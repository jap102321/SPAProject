import { useState, useEffect } from "react";
import "../assets/css/blog.css";
import { search } from "../api/api";
import ListCategories from "../Components/ListCategorias/ListCategories";
import ListPost from "../Components/ListPosts/ListPost";
import {
  useParams,
  Routes,
  Route,
  Link,
  useResolvedPath,
} from "react-router-dom";
import SubCategoria from "./Subcategoria";

const Categoria = () => {
  const [subcategorias, setSubcategorias] = useState([]);
  const { id } = useParams();

  const url = useResolvedPath("").pathname;

  useEffect(() => {
    search(`/categorias?id=${id}`, (resp) => {
      setSubcategorias(resp[0].subcategorias);
    });
  });
  return (
    <>
      <div className="container">
        <h2 className="title-page">Pet noticias</h2>
      </div>
      <ListCategories />
      <ul className="category-list container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`category-list__category category-list__category--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/" element={<ListPost url={`/posts?categoria=${id}`} />} />
        <Route path="/:subcategoria" element={<SubCategoria />} />
      </Routes>
    </>
  );
};

export default Categoria;
