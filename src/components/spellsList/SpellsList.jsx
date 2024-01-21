import PropTypes from "prop-types";
import SpellsItem from "../spellsItem/SpellsItem";
import styles from "./SpellsList.module.scss";

const SpellsList = ({ spells }) => {
  const spellsList = spells.map((eachSpell) => (
    <li className={styles.item} key={eachSpell.id}>
      <SpellsItem eachSpell={eachSpell} />
    </li>
  ));

  const filterErrorMsg = () => {
    return (
      <div className={styles.error}>
        <p className='search__error-msg'>
          Sorry, we were not able to find what you are looking for :(
        </p>
        <p className='search__error-msg'>Try again!</p>
      </div>
    );
  };

  return (
    <ul className={styles.spells}>
      {spells.length === 0 ? filterErrorMsg() : spellsList}
    </ul>
  );
};

// defaultProps

SpellsList.defaultProps = {
  spells: [
    {
      id: 0,
      title: "Spell name",
      image: "Spell Image URL",
      desc: "Spell description",
    },
  ],
};

SpellsList.propTypes = {
  spells: PropTypes.array,
};

export default SpellsList;
