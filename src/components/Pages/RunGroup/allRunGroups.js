import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRunGroupsActions } from "../../Redux/RunGroup/rungroupActions";
import GroupSummary from "./runGroupSummary";

const AllRunGroups = () => {
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.runGroup.groups);
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
            runners={groups.runners.length}
            events={groups.events.length}
          />
        ))
      );
    }
  }, [groups]);

  return (
    <div className="event-list section">
      <div>
        <h3 className="white-text "> All Events </h3>
        <h5 className="white-text ">Scroll Through All Events</h5>
      </div>
      <div className="myBox">
        <div>{data}</div>
      </div>
    </div>
  );
};

export default AllRunGroups;
