import React from 'react'

function Scholarship({ content }) {
  console.log("I got here", content);

  return (
    <section>
      <div>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </div>
    </section>
  );
}

export default Scholarship