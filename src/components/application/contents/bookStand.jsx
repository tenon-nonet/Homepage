import { Typography, CardMedia, Link } from "@mui/material";
const BookStand = () => {
  return (
    <>
      <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
      <Typography variant="h2">・本管理アプリ</Typography>
      <Typography variant="p">
        初めて作ったアプリ。PHP、Laravelを使用して作成。<br />
        プログラミングの難しさを実感したアプリでもある。<br />
        <Link href="https://bookstand.tenon-nonet.com">bookstand.tenon-nonet.com</Link>
      </Typography>
    </>
  );
};

export default BookStand;