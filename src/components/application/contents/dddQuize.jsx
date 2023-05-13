import { Typography, CardMedia, Link } from "@mui/material";
const dddQuize = () => {
  return (
    <>
      <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
      <Typography variant="h2">・DDDquize</Typography>
      <Typography variant="p">
        クイズWebアプリ。伸び代しかない。<br />
        quizではなく、quize。意味はこれから考える。<br />
        <Link href="https://quize.tenon-nonet.com">quize.tenon-nonet.com</Link>
      </Typography>
    </>
  );
};

export default dddQuize;