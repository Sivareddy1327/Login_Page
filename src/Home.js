import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { startGetdata } from "./Action/dataAction";
import "./Home.css";

const Home = (props) => {
  const [search, setSearch] = useState("");
  const [filterdata, setFilterData] = useState([]);
  const info = useSelector((state) => {
    return state.data;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetdata());
  }, []);
  const handleSearch = (e) => {
    const input = e.target.value;
    setSearch(input);
    console.log(input);
    const result = info.filter((ele) => {
      if (input.toLowerCase() === ele.data.display_name.toLowerCase()) {
        return ele;
      }
    });
    setFilterData(result);
  };
  return (
    <div>
      <div style={{ marginTop: "45px",marginLeft:'200px' }}>
        <input
          type="text"
          value={search}
          placeholder="search by name"
          onChange={handleSearch}
        />
      </div>

      <div style={{ marginTop: "25px", width: "300%" }}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Comments</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {search
              ? filterdata.map((ele, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{ele.data.display_name}</td>
                      <td>
                        <a
                          href={`https://www.reddit.com${ele.data.url}posts/`}
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          View_Posts
                        </a>
                      </td>
                      <td>
                        <a
                          href={`https://www.reddit.com${ele.data.url}comments/`}
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          View_Comments
                        </a>
                      </td>
                    </tr>
                  );
                })
              : info.map((ele, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{ele.data.display_name}</td>
                      <td>
                        <a
                          href={`https://www.reddit.com${ele.data.url}posts/`}
                          target="_blank"
                          style={{ textDecoration: "none"}}
                        >
                          View_Posts
                        </a>
                      </td>
                      <td>
                        <a
                          href={`https://www.reddit.com${ele.data.url}comments/`}
                          target="_blank"
                          style={{ textDecoration: "none" }}
                        >
                          View_Comments
                        </a>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
