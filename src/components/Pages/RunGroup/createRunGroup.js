import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CreateRunGroupForm } from "../../Forms/createRunGroupForm";
import Time from "../../Time/time";
//form to create groups
const CreateRunGroup = (props) => {
  useEffect(() => (document.title = "Create Groups - Runner's Inertia"), []);

  const history = useHistory("");

  const letsGoBack = () => history.push("/homepage");

  return (
    <div>
      <div className="container">
        <CreateRunGroupForm />
      </div>
      <br></br>
      <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
      <div className="container">
        <Time />
      </div>
    </div>
  );
};
export default CreateRunGroup;
