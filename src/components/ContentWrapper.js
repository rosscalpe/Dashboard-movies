import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop'
import Chart from './Chart'
import Movie from './Movie'
import Footer from './Footer'

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <ContentRowTop />
        <Chart />
        <Movie />
      </div>
      <Footer />
    </div>
  );
}
export default ContentWrapper;