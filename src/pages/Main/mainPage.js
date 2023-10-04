import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import basePage from '../basePage'
import Skills from './skills';
import { AiOutlineInstagram, AiFillLinkedin, AiFillGithub,
  AiFillMail } from "react-icons/ai";


function MainPage() {
  return (
    <Grid container spacing={2}>
      <Grid sx={8} lg={8} style={{display: "flex", borderRight: "1px solid black",
    borderBottom: "1px solid black"}}>
      <img style={{ "height": "45vh", "marginTop": "-1%"}}
       src="IMG_5910.JPG" alt="me" className="responsive" />

       <div style={{ padding: "inherit", fontSize: "large", fontFamily: "cursive"}}>
        <h1>Goutham Doddi</h1>
        <p>I am a 27 year old Software Engineer based in Vizag, India.
          I have started working as a Software Test Engineer and have
          transitioned into a full stack developer. I can work with any 
          language and framework and am very adaptable.
        </p>
        <p>
          I love learning new skills and using them, till I find another
          more intresting set of skills to master. This also reflects in 
          my passion for playing the guitar, tennis and games.
        </p>
       </div>

      </Grid>
      <Grid sx={4} lg={4} style={{borderBottom: "1px solid black"}}>
        <Grid sx={12} lg={12} style={{ borderBottom: "1px solid black" }}>
        <div style={{ display: "flex" }}>

        
        <div style={{
            display: "flex",
            justifyContent: "center",
            background: "black",
            color: "white",
            padding: "6px",
            borderRadius: "12px"
          }}>
            <AiOutlineInstagram size={25} />
            <a
              href="https://instagram.com/goutham_doddi?igshid=OGQ5ZDc2ODk2ZA=="
              style={{ color: "white", marginLeft: "5px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              @goutham_doddi
            </a>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "center",
            background: "black",
            color: "white",
            padding: "6px",
            borderRadius: "12px",
            marginInline: "auto"
          }}>
            <AiFillLinkedin size={25} />
            <a
              href="www.linkedin.com/in/goutham-doddi-22441b138"
              style={{ color: "white", marginLeft: "5px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/goutham-doddi-22441b138/
            </a>
          </div>

          </div>

          <div style={{ display: "flex", marginTop: "2px", marginBottom: '10px' }}>

          <div style={{
            display: "flex",
            justifyContent: "center",
            background: "black",
            color: "white",
            padding: "6px",
            borderRadius: "12px",
            height: "23px"
          }}>
            <AiFillGithub size={25} />
            <a
              href="https://github.com/GouthamDoddi"
              style={{ color: "white", marginLeft: "5px" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Goutham Doddi
            </a>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "center",
            background: "black",
            color: "white",
            padding: "6px",
            borderRadius: "12px",
            height: "fit-content",
            marginInline: "auto",
            height: "23px",
            alignItems: "center",
          }}>
            <AiFillMail size={25} />
            <p>
            <a href="mailto:gouthamdoddi97@gmail.com" 
            style={{ color: "white", marginLeft: "5px" }}>
              gouthamdoddi97@gmail.com
            </a>
            </p>

          </div>

          </div>


        </Grid>
        <Grid sx={12} lg={12}>
          <Skills />
        </Grid>
      </Grid>
      <Grid sx={4} lg={4}>
        education
      </Grid>
      <Grid sx={8} lg={8}>
        experience
      </Grid>

    </Grid>
  );
}




export default basePage(MainPage);