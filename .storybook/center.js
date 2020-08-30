import React from "react";

const style = {
    maxWidth: 680,
    margin: '0 auto'
}

export default function(renderStory) {
  return <div style={style}>{renderStory()}</div>
}