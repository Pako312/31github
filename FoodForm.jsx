import React from "react";
import './Index.css';
function FoodForm() {
  return (
    <div className="Input-box">
      <form>
        <form>
          <label for="food">Выберите еду:</label>
          <select id="food" name="fruits">
            <option value="Plov">Плов</option>
            <option value="Lagman">Лагман</option>
            <option value="Manty">Манты</option>
          </select>
        </form>
      </form>
    </div>
  );
};

export default FoodForm;