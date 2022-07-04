import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import NotFound from "../../Components/NotFound";
import Inquire from "./Inquire";
import Applyto from "./Sub-pages/Admission/Applyto";
import Frequent from "./Sub-pages/Admission/Frequent";
import Proceedure from "./Sub-pages/Admission/Proceedure";
import Scholarship from "./Sub-pages/Admission/Scholarship";
import Tuition from "./Sub-pages/Admission/Tuition";
import { api } from "../../misc/api";

function Admission() {
  const location = useLocation();
  const currentPath = window.location.pathname;
  const [noteData, setNoteData] = useState({});
  const [page, setPageData] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/admission/admission-proceedure":
        setPageData("procedure");
        // console.log(page);
        break;

      case "/admission/tuition":
        setPageData("tuition");
        // console.log(page);
        break;

      case "/admission/scholarship":
        setPageData("scholarships");
        // console.log(page);
        break;
      case "/admission/f-a-q":
        setPageData("faqs");
        // console.log(page);
        break;
    }
    console.log(location.pathname, page);
  }, [location]);
  const fetchData = () => {
    if (page !== "")
      api
        .get("admission/" + page)
        .then((res) => {
          // const abridgeData = res.data;
          console.log("Fetched", res.data);
          setNoteData(res.data);
        })
        .catch(console.log);
  };
  useEffect(() => {
    fetchData();
    console.log(page);
  }, [page]);
  useEffect(() => {
    console.log(noteData);
  }, [noteData]);
  return (
    <>
      <section>
        <div className="container">
          <div className="row col-md-12">
            <Switch location={location} key={location.pathname}>
              <Route path={"/admission"} exact>
                <Redirect to={"/admission/admission-proceedure"} />
              </Route>
              <Route path="/admission/admission-proceedure">
                <Proceedure content={noteData.content} />
              </Route>
              <Route path="/admission/tuition">
                <Tuition content={noteData.content} />
              </Route>
              <Route path="/admission/scholarship">
                <Scholarship content={noteData.content} />
              </Route>
              <Route path="/admission/f-a-q" component={Frequent}>
                <Frequent noteData={noteData} />
              </Route>
              <Route path="/admission/apply-to-lagoon" component={Applyto}>
                <Applyto content={noteData.content} />
              </Route>
              <Route path="*" component={NotFound} />
            </Switch>

            <Inquire />
          </div>
        </div>
      </section>
    </>
  );
}

export default Admission;
