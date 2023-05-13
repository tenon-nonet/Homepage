import { Typography, CardMedia, Link } from "@mui/material";
const BookStand = () => {
  return (
    <>
      <Typography variant="h5">・本管理アプリ</Typography><br />
      <Typography variant="p">
        初めて作ったアプリ。PHP、Laravelを使用して作成。<br />
        プログラミングの難しさを実感したアプリでもある。<br /><br />
        <Link href="https://bookstand.tenon-nonet.com">bookstand.tenon-nonet.com</Link>
      </Typography>
      <br /><br />
      <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
    </>
  );
};

export default BookStand;