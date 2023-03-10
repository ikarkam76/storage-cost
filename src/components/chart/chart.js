import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import { LegendContainer, LegendItem, ResultContainer, ResultItem, Result} from "./chart.styled";

const Chart = ({ value }) => {
  const { storage, transfer } = value;
  const [bunnyChecked, setBunnyChecked] = useState("a");
  const [scalewayChecked, setScalewayChecked] = useState("a");
  const [backblaze, setBackblaze] = useState(0);
  const [bunny, setBunny] = useState(0);
  const [scaleway, setScaleway] = useState(0);
  const [vultr, setVultr] = useState(0);
  const [result, setResult] = useState([]);

    const handleChangeBunny = (event) => {
        setBunnyChecked(event.target.value);
  };

  const handleChangeScaleway = (event) => {
    setScalewayChecked(event.target.value);
  };
  
  useEffect(() => {
    
    setBackblaze(storage * 0.005 + transfer * 0.01);

    setVultr(storage * 0.01 + transfer * 0.01);

    bunnyChecked === "a"
      ? setBunny(storage * 0.01 + transfer * 0.01)
      : setBunny(storage * 0.02 + transfer * 0.01);
    
    if (scalewayChecked === 'a') {
      if (storage <= 75 && transfer <= 75) {
        setScaleway(0)
      } else {
        if (storage <= 75) {
          setScaleway((transfer - 75) * 0.02);
        } else
        {if (transfer <= 75) {
          setScaleway((storage - 75) * 0.06)
        } else {
          setScaleway((transfer - 75) * 0.02 + (storage - 75) * 0.06);
        }}
      }
    } else {
      if (storage <= 75 && transfer <= 75) {
        setScaleway(0);
      } else {
        if (storage <= 75) {
          setScaleway((transfer - 75) * 0.02);
        } else {
          if (transfer <= 75) {
            setScaleway((storage - 75) * 0.03);
          } else {
            setScaleway((transfer - 75) * 0.02 + (storage - 75) * 0.03);
          }
        }
      }
    };

    const sortedResult = [
      backblaze <= 7 ? 7 : backblaze,
      bunny >= 10 ? 10 : bunny,
      scaleway,
      vultr <= 5 ? 5 : vultr,
    ].sort((a, b) => a - b);
    setResult(sortedResult);
  }, [backblaze, bunny, bunnyChecked, scaleway, scalewayChecked, storage, transfer, vultr]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <LegendContainer>
          <LegendItem>
            <img
              src="https://www.backblaze.com/pics/header/logo-backblaze-flame-header.4851ea2289eaf4242079c6dcd0acb1be.png"
              alt="logo-backblaze"
              width="90%"
            />
          </LegendItem>
          <LegendItem>
            <img
              src="https://bunny.net/static/bunnynet-dark-1288676ed0416402d9368c73f9e34b55.svg"
              alt="logo-bunny"
              width="80%"
            />
            <br />
            <Radio
              size="small"
              checked={bunnyChecked === "a"}
              onChange={handleChangeBunny}
              value="a"
              name="bunny"
            />{" "}
            HDD
            <Radio
              size="small"
              checked={bunnyChecked === "b"}
              onChange={handleChangeBunny}
              value="b"
              name="bunny"
            />{" "}
            SSD
          </LegendItem>
          <LegendItem>
            <img
              src="https://www.cloudflare.com/static/59d7eb016d2e0ca023658d2216a56eb4/logo-scaleway-600.png"
              alt="logo-scaleway"
              width="80%"
            />
            <br />
            <Radio
              size="small"
              checked={scalewayChecked === "a"}
              onChange={handleChangeScaleway}
              value="a"
              name="scaleway"
            />{" "}
            Multi
            <Radio
              size="small"
              checked={scalewayChecked === "b"}
              onChange={handleChangeScaleway}
              value="b"
              name="scaleway"
            />{" "}
            Single
          </LegendItem>
          <LegendItem>
            <img
              src="https://www.vultr.com/media/media_card_1200x630.png"
              alt="logo-vultr"
              width="80%"
            />
          </LegendItem>
        </LegendContainer>
        <ResultContainer>
          <ResultItem
            sx={{
              width: `${backblaze <= 7 ? 7 : backblaze}%`,
              backgroundColor:
                result[0] === (backblaze <= 7 ? 7 : backblaze)
                  ? "#B73A3A"
                  : "#e0dfda",
            }}
          >
            <Result>{backblaze <= 7 ? "7.00" : backblaze.toFixed(2)}$</Result>
          </ResultItem>
          <ResultItem
            sx={{
              width: `${bunny >= 10 ? 10 : bunny}%`,
              backgroundColor:
                result[0] === (bunny >= 10 ? 10 : bunny)
                  ? "#FE9666"
                  : "#e0dfda",
            }}
          >
            <Result>{bunny >= 10 ? "10.00" : bunny.toFixed(2)}$</Result>
          </ResultItem>
          <ResultItem
            sx={{
              width: `${scaleway}%`,
              backgroundColor: result[0] === scaleway ? "#5C2D91" : "#e0dfda",
            }}
          >
            <Result>{scaleway.toFixed(2)}$</Result>
          </ResultItem>
          <ResultItem
            sx={{
              width: `${vultr <= 5 ? 5 : vultr}%`,
              backgroundColor:
                result[0] === (vultr <= 5 ? 5 : vultr) ? "#118DFF" : "#e0dfda",
            }}
          >
            <Result>{vultr <= 5 ? "5.00" : vultr.toFixed(2)}$</Result>
          </ResultItem>
        </ResultContainer>
      </Box>
    </>
  );
}

export default Chart;
