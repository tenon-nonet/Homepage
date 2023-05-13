import { Box, ImageList,ImageListItem } from '@mui/material';

const itemData =[
  {img: "https://nonet3.files.wordpress.com/2023/05/e382b9e382afe383aae383bce383b3e382b7e383a7e38383e38388-2023-05-11-16.08.47.png?w=1024", title: 'Image 1'},
  {img: "https://nonet3.files.wordpress.com/2023/05/e382b9e382afe383aae383bce383b3e382b7e383a7e38383e38388-2023-05-11-16.09.18efbc882efbc89.png",title: 'Image 2'},
];
const Title_Tab = () => {
  return (
    <>
      <Box sx={{ fontSize: '40px', position: 'absolute', top: '250px', borderBottom: '1px solid', }}>
        application
      </Box>
      <Box sx={{ fontSize: '15px', position: 'absolute', top: '350px', padding: '40px', maxWidth: '70%' }}>


        <img src="https://nonet3.files.wordpress.com/2023/05/00019-77334530-removebg-preview.png?w=500" alt="" width="300px" />
        <h2>・本管理アプリ</h2>
        <p>初めて作ったアプリ。PHP、Laravelを使用して作成。</p>
        <p>プログラミングの難しさを実感したアプリでもある。</p>
        <a href="bookstand.tenon-nonet.com">bookstand.tenon-nonet.com</a>
        <hr />
      </Box>

    </>
  );
};

export default Title_Tab;