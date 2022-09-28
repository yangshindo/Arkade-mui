import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <div className="footer-div">
      <br />
      <br />
      <br />
      <div>
        <img
          alt="speechbubble-img"
          className="speechbubble-img"
          src="https://i.imgur.com/YQVkr6W.png"
        />
        <img
          alt="chibimay-img"
          className="chibimay-img"
          src="https://i.imgur.com/EysIyUj.png"
        />
      </div>
      <p className="footer-text">
        Privacy Policy &nbsp; / &nbsp; Terms of Use &nbsp; / &nbsp; Data
        Disclaimer
      </p>
      <p className="footer-text">João Mário - 2022</p>
    </div>
  );
}

export default Footer;
