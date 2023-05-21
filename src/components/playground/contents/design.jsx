
import { Typography, CardMedia, } from "@mui/material";
import figma1 from "../../../assets/img/playgroud/study/figma1.webp";
import figma2 from "../../../assets/img/playgroud/study/figma2.webp";
import figma3 from "../../../assets/img/playgroud/study/figma3.webp";
import lucid2 from "../../../assets/img/playgroud/study/lucid2.webp";
const Design = () => {
        return (
                <>
                        <Typography variant="h5">・Figma</Typography>
                        <Typography variant="p">
                                Webアプリ作成のワイヤーフレームの作成に使用<br />
                                画面レイアウトを作成してからアプリの作成を行なっている。<br />
                                予定から変更となることもままある
                        </Typography>
                        <CardMedia component="img" image={figma1} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={figma2} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={figma3} alt="MyIcon" style={{ width: "100%" }} />
                        <hr />
                        <Typography variant="h5">・Lucidchart</Typography>
                        <Typography variant="p">
                                フローチャートを作成する際に使用。<br />
                                paizaの問題を解く際に思考を整理するために使用。<br />
                                基本的なFCの記述方法を学習した。
                        </Typography>
                        <CardMedia component="img" image={lucid2} alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Design;