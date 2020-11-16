import Box from './components/Box';
import BoxList from './components/BoxList';

function MagicBoxFeature() {
  const box = {
    color: 'red',
    luckyNumber: 19,
  };

  const boxList = [
    { color: 'goldenrod', luckyNumber: 1 },
    { color: 'red', luckyNumber: 2 },
    { color: 'green', luckyNumber: 3 },
    { color: 'black', luckyNumber: 4 },
  ];
  return (
    <div>
      <h1>Magic Box</h1>

      <Box color="green" luckyNumber={11} />
      <Box color={box.color} luckyNumber={box.luckyNumber} />
      <Box luckyNumber={13} />

      <BoxList boxList={boxList} />
    </div>
  );
}

export default MagicBoxFeature;
