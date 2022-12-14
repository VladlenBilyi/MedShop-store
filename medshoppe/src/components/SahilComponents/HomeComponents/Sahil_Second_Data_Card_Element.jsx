import { Sahil_Second_Data } from "../Sahil_data/Sahil_Second_Data";
import { Second_Single_Card } from "./Sahil_Second_Single_Card";

const Second_Data_Card_Element = () => {

  return (
      <div>
        <div className="Sahil_Second_Single_SinglePage_Element_grid">
          { 
          Sahil_Second_Data.map((elem) => {
            return (
              <div key={elem.id}>
                  <Second_Single_Card {...elem}/>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export {Second_Data_Card_Element};