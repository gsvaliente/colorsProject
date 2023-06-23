import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Values from 'values.js';

import { ColorList } from './components/ColorList';
import { Form } from './components/Form';

const App = () => {
  const [colors, setColors] = useState([]);

  const handleColor = (newColor) => {
    try {
      const colorArray = new Values(newColor).all(10);
      setColors(colorArray);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <main>
      <Form handleColor={handleColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
