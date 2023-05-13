import { Typography, CardMedia, Link } from "@mui/material";
const dddQuize = () => {
  return (
    <>
    <Typography variant="h5">・DDDquize</Typography><br />
      <Typography variant="p">
        クイズWebアプリ。伸び代しかない。<br />
        quizではなく、quize。意味はこれから考える。<br /><br />
        <Link href="https://quize.tenon-nonet.com">quize.tenon-nonet.com</Link>
      </Typography>
      <br /><br />
      <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
      
    </>
  );
};

export default dddQuize;