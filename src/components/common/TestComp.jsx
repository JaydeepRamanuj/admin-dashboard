import React from "react";

function TestComp() {
  return (
    <div>
      <div className="flex justify-between mt-6">
        {ProductPageHighlightNumberItems.map((item, index) => (
          <HighlightNumbersCard
            key={index}
            icon={item.icon}
            name={item.name}
            number={item.value}
          />
        ))}
      </div>
    </div>
  );
}

export default TestComp;
