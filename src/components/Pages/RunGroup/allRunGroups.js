import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRunGroupsActions } from "../../Redux/RunGroup/rungroupActions";
import GroupSummary from "./runGroupSummary";
import SearchBar from "../../SearchBar/searchBar";
import { useHistory } from "react-router";

const AllRunGroups = () => {
    const history = useHistory("")
  const dispatch = useDispatch();
  //   const [runnerName, setRunnerName]= useState('');
  const groups = useSelector((state) => state.runGroup.groups[0]);
  const [data, setData] = useState([]);


  useEffect(() => {
    dispatch(getAllRunGroupsActions());
    if (!groups) {
      setData([<p>...Loading</p>]);
 
    } else {
      setData(
        groups.map((groups) => (
          <GroupSummary
            group={groups}
            key={groups.id}
            name={groups.name}
            groupType={groups.groupType}
            // // runners={groups.runners.length}
            // runnerName = {groups.runner[0].username}
            // events={groups.events.length}
          />
        ))
      );
    }
  }, [!groups]);

  return (
    <div className="event-list section">
      <div>
        <h3 className="white-text "> All Run Groups</h3>
        <h5 className="white-text ">Scroll Through All Run Groups</h5>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="myBox">
        <div>{data}</div>
      </div>
    </div>
  );
};

export default AllRunGroups;
