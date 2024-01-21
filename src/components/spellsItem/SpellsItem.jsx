import PropTypes from "prop-types";
import defaultImage from "../../images/default-img.svg";
import styles from "./SpellsItem.module.scss";

const SpellsItem = ({ eachSpell }) => {
  return (
    <>
      <img
        src={eachSpell.image || defaultImage}
        alt={eachSpell.title}
        className={styles.itemImage}
      />
      <h3 className={styles.itemTitle}>{eachSpell.title}</h3>
      <p className={styles.itemDesc}>{eachSpell.desc}</p>
    </>
  );
};

SpellsItem.defaultProps = {
  image: defaultImage,
  title: "Spell name",
  desc: "Spell description,",
};

SpellsItem.propTypes = {
  eachSpell: PropTypes.object,
};

export default SpellsItem;
