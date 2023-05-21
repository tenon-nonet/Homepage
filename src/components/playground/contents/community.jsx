
import { Typography, CardMedia, } from "@mui/material";
import discord1 from "../../../assets/img/playgroud/community/discord1.webp"
import discord2 from "../../../assets/img/playgroud/community/discord2.webp"
import ikabo1 from "../../../assets/img/playgroud/community/ikabo1.webp"
import ikabo2 from "../../../assets/img/playgroud/community/ikabo2.webp"
const Comumnity = () => {
        return (
                <>
                        <Typography variant="h5">・ゆるプロ</Typography>
                        <Typography variant="p">
                                プログラマーコミュニティ「ゆるプロ▽」を作成<br />
                                継続的な学習のための環境を作り、多くのプログラマーと交流ができる。<br />
                                これが無ければ今の私は、ない。
                        </Typography>
                        <CardMedia component="img" image={discord1} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={discord2} alt="MyIcon" style={{ width: "100%" }} />
                        <Typography variant="h5">・イカボッチ</Typography>
                        <Typography variant="p">
                                Splatoon3コミュニティ「イカボッチ」を作成<br />
                        </Typography>
                        <CardMedia component="img" image={ikabo1} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={ikabo2} alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Comumnity;