import React, {useEffect} from "react";
import Tmdb from "./Tmdb";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
    };
    loadAll();
  }, []);
  return <div>Olá mundo</div>;
};
