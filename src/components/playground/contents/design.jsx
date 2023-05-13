
import { Typography, CardMedia, } from "@mui/material";
const Design = () => {
        return (
                <>
                        <Typography variant="h5">・Figma</Typography><br />
                        <Typography variant="p">
                                Webアプリ作成のワイヤーフレームの作成に使用<br />
                                画面レイアウトを作成してからアプリの作成を行なっている。<br />
                                予定から変更となることもままある<br /><br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                        <hr /><br />
                        <Typography variant="h5">・Lucidchart</Typography><br />
                        <Typography variant="p">
                                フローチャートを作成する際に使用。<br />
                                paizaの問題を解く際に思考を整理するために使用。<br />
                                基本的なFCの記述方法を学習した<br /><br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Design;