import { withRouter } from "react-router-dom";
import React from "react";

const SetUpPlan = ({history, location}) => {
  console.log({history, location})
  return(
    <div>
      Inside Set_up_plan Page
      <img src="cat_image.jpg" alt="cat"/>
    </div>
  );
}

export default withRouter(SetUpPlan);
//export default SetUpPlan;