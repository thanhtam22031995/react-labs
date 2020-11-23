import { useState } from 'react';
import BoxList from './components/BoxList';

const FAKE_DATA = [
  { color: 'goldenrod', luckyNumber: 1, size: 'small' },
  { color: 'red', luckyNumber: 2, size: 'large' },
  { color: 'green', luckyNumber: 3, size: 'medium' },
  { luckyNumber: 4 },
];

function MagicBoxFeature() {
  const [boxList, setBoxList] = useState(FAKE_DATA);

  const handleBoxClick = (box, idx) => {
    console.log(box, idx);

    // Remove Box From List
    const newBoxList = [...boxList];
    newBoxList.splice(idx, 1);

    setBoxList(newBoxList);
  };

  return (
    <div>
      <h1>Magic Box</h1>

      <BoxList boxList={boxList} onBoxClick={handleBoxClick} />
    </div>
  );
}

export default MagicBoxFeature;
