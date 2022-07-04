import React from 'react'

function Tuition({ content }) {
  console.log("I got here", content);

  return (
    <section>
      <div className="col-md-12 row">
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </div>
    </section>
  );
}

export default Tuition