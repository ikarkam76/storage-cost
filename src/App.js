import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import "./App.css";
import Chart from "./components/chart";

const App = () => {
  const [storage, setStorage] = useState(0);
  const [transfer, setTransfer] = useState(0);
  

  const handleStorageChange = (event, newValue) => {
    setStorage(newValue);
  };

  const handleTransferChange = (event, newValue) => {
    setTransfer(newValue);
  };


  return (
    <div>
      <div className="App">
        <div className="Sliders">
          <Box sx={{ width: "40%", margin: "5%" }}>
            <Typography sx={{ marginBottom: "20px", fontWeight: 700 }}>
              Storage: {storage} GB
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ marginRight: "10px" }}>0</Typography>
              <Slider
                size="small"
                value={storage}
                min={0}
                step={1}
                max={1000}
                onChange={handleStorageChange}
                valueLabelDisplay="auto"
              />
              <Typography sx={{ marginLeft: "10px" }}>1000</Typography>
            </Box>
          </Box>
          <Box sx={{ width: "40%", margin: "5%" }}>
            <Typography sx={{ marginBottom: "20px", fontWeight: 700 }}>
              Transfer: {transfer} GB
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Typography sx={{ marginRight: "10px" }}>0</Typography>
              <Slider
                size="small"
                value={transfer}
                min={0}
                step={1}
                max={1000}
                onChange={handleTransferChange}
                valueLabelDisplay="auto"
              />
              <Typography sx={{ marginLeft: "10px" }}>1000</Typography>
            </Box>
          </Box>
        </div>
        <Chart value={{ storage, transfer }} />
      </div>
    </div>
  );
}

export default App;
