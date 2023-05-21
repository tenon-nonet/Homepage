
import { Typography } from "@mui/material";
const framework = () => {
    return (
        <>
            <Typography variant="h5">・Laravel</Typography>
            <Typography variant="p">
                初めて使用したフレームワーク<br />
                本管理アプリを作成したが、PHPの基礎が習得できておらず、<br />
                基礎から学習することの重要性を知る機会となった。
            </Typography>



            <a href="https://www.hypertextcandy.com/laravel-tutorial-introduction">
                入門Laravelチュートリアル
            </a> <br />Masahiro Harada
            {/* <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} /> */}
            <hr />

            <Typography variant="h5">・React</Typography>
            <Typography variant="p">
                このHOMEPageはReactを使用して書かれている。<br />
                PHP,Laravelの時と同様に、JSの学習を基礎から行うきっかけとなった<br />
                このHOMEPageの作成とともにReactの学習を進めていく
            </Typography>
            {/* <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} /> */}
        </>
    );
};

export default framework;