
import { Typography, CardMedia, } from "@mui/material";
const framework = () => {
  return (
    <>
      <Typography variant="h5">・Laravel</Typography><br />
      <Typography variant="p">
        初めて使用したフレームワーク<br />
        本管理アプリを作成したが、PHPの基礎が習得できておらず、<br />
        基礎から学習することの重要性を知る機会となった。<br /><br />
      </Typography>
      <br /><br />
      <Typography variant="p">
        <a href="https://www.hypertextcandy.com/laravel-tutorial-introduction">
          動かして学ぶ！Laravel開発入門
        </a><br />
        山崎大助 著
      </Typography>
      <br /><br />
      <a href="https://www.hypertextcandy.com/laravel-tutorial-introduction">
        入門Laravelチュートリアル
      </a> <br />Masahiro Harada
      {/* <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} /> */}
      <hr />

      <Typography variant="h5">・React</Typography><br />
      <Typography variant="p">
        このHOMEPageはReactを使用して書かれている。<br />
        PHP,Laravelの時と同様に、JSの学習を基礎から行うきっかけとなった<br />
        このHOMEPageの作成とともにReactの学習を進めていく<br /><br />
      </Typography>
      {/* <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} /> */}
    </>
  );
};

export default framework;