import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Typical from "react-typical";

const Title_Tab = () => {
  return (
    <>

      <Box sx={{ fontSize: '40px', position: 'center', borderBottom: '1px solid', marginTop: '2000px' }}>
        application
      </Box>
      <Box sx={{ fontSize: '15px', position: 'relative', padding: '40px', maxWidth: '70%' }}>

        <img class="imgApp" src="https://nonet3.files.wordpress.com/2023/05/e382b9e382afe383aae383bce383b3e382b7e383a7e38383e38388-2023-05-11-16.08.47.png?w=1024" alt="出ないなあ、、" height="500px" />
        <img class="imgApp" src="https://nonet3.files.wordpress.com/2023/05/e382b9e382afe383aae383bce383b3e382b7e383a7e38383e38388-2023-05-11-16.09.18efbc882efbc89.png" alt="出ないなあ、、" height="400px" />
        <h2>・SPDs Threads</h2>
        <p>２ちゃんねる風の掲示板</p>
        <p>PHPを使用して作成。DB操作の基本的な構造を網羅している</p>
        <a href="threads.tenon-nonet.com">threads.tenon-nonet.com</a>
        <hr />
        <br />
        <img src="https://nonet3.files.wordpress.com/2023/05/e382b9e382afe383aae383bce383b3e382b7e383a7e38383e38388-2023-05-11-16.18.10efbc882efbc89.png" alt="出ないなあ、、" height="500px" />
        <img src="https://nonet3.files.wordpress.com/2023/05/e382b9e382afe383aae383bce383b3e382b7e383a7e38383e38388-2023-05-11-16.18.21efbc882efbc89.png" alt="" height="500px" />
        <h2>・DDDSpeaker</h2>
        <p>VOICEVOXを使って、テキストの読み上げができるのだ。</p>
        <p>初めての共同開発なのだ。LiveShare、GitHUBなどを活用して開発を行ったのだ。</p>
        <p>初めてデプロイしたアプリでもあるのだ。</p>
        <a href="speaker.tenon-nonet.com">speaker.tenon-nonet.com</a>
        <hr />
        <br />
        <img class="imgApp" src="https://nonet3.files.wordpress.com/2023/05/00004-1349217655-removebg-preview.png" alt="出ないなあ、、" width="300px" />
        <h2>・DDDquize</h2>
        <p>クイズWebアプリ。伸び代しかない。</p>
        <p>quizではなく、quize。意味はこれから考える。</p>
        <a href="quize.tenon-nonet.com">quize.tenon-nonet.com</a>
        <hr />
        <br />
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