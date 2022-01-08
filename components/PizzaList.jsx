import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LA MEJOR PIZZA DE LA CIUDAD</h1>
      <p className={styles.desc}>
        Todas las preparaciones de PatriGm Pizzería destacan por su delicioso
        sabor, la profesionalidad de la preparación y la máxima calidad de los
        productos empleados. Todo es fresco para aportar un gusto sensacional a
        cualquier comida. Además, para que puedas disfrutar de cualquier de los
        platos de nuestra carta, en PatriGM Pizzería disponemos de un excelente
        servicio de comida a domicilio.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
