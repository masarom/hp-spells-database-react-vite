import SpellsList from "./components/spellsList/SpellsList";
import styles from "./App.module.scss";
import { useEffect, useState } from "react";
import CallToApi from "./services/api";
import SpellsSearch from "./components/spellsSearch/SpellsSearch";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [spells, setSpells] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // Spells call to Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { cleanedData, pagesCount } = await CallToApi(page);
        setSpells(cleanedData);
        setLastPage(pagesCount);
      } catch (error) {
        console.error("Error fetching data: " + error);
      }
    };
    fetchData();
  }, [page, lastPage]);

  // Search bar filtering
  const handleFilter = (value) => {
    const clonedValue = value;
    setSearch(clonedValue);
  };

  const filterSpells = spells.filter((eachSpell) =>
    eachSpell.title.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const goToPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    if (page < lastPage) {
      setPage(page + 1);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Harry Potter Spells Database</h1>
      <SpellsSearch handleFilter={handleFilter} search={search} />
      <Pagination
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        page={page}
        lastPage={lastPage}
      />
      <SpellsList spells={filterSpells} />
    </>
  );
}

export default App;
