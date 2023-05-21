
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
                                Webアプリ作成のワイヤーフレームの作成に使用。<br /><br />
                                画面レイアウトを作成してからアプリの作成を行なっている。<br /><br />
                                予定から変更となることもままあるが、<br />
                                開発の全体像を把握してから開発に取り掛かることで、<br />
                                作業効率が上がる事を実感。<br /><br />
                        </Typography>
                        <CardMedia component="img" image={figma1} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={figma2} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={figma3} alt="MyIcon" style={{ width: "100%" }} />
                        <hr /><br />
                        <Typography variant="h5">・Lucidchart</Typography>
                        <Typography variant="p">
                                フローチャートを作成する際に使用。<br /><br />
                                paizaの問題を解く際に思考を整理するために使用。<br />
                                基本的なFCの記述方法を学習した。<br /><br />
                                Figmaと同様に、設計を行なってから開発に取り掛かることで、<br />
                                作業効率が上がる事を実感することができた。<br /><br />
                        </Typography>
                        <CardMedia component="img" image={lucid2} alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Design;