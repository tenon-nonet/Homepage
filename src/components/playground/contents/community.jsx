
import { Typography, CardMedia, } from "@mui/material";
import discord1 from "../../../assets/img/playgroud/community/discord1.webp"
import discord2 from "../../../assets/img/playgroud/community/discord2.webp"
import ikabo1 from "../../../assets/img/playgroud/community/ikabo1.webp"
import ikabo2 from "../../../assets/img/playgroud/community/ikabo2.webp"
const Comumnity = () => {
        return (
                <>
                        <Typography variant="h5">・ゆるプロ▽</Typography>
                        <Typography variant="p">
                                Discord上にプログラマーコミュニティ「ゆるプロ▽」を作成<br />
                                継続的な学習のための環境と、<br />
                                情報共有の場として活用している。<br /><br />
                                2023年5月現在42名が所属しており、<br />
                                多くのプログラミング学習者と交流ができる。<br /><br />
                                これが無ければ今の私は、ない。
                        </Typography>
                        <CardMedia component="img" image={discord1} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={discord2} alt="MyIcon" style={{ width: "100%" }} />
                        <hr /><br /><br />
                        <Typography variant="h5">・ゲームコミュニティ</Typography>
                        <Typography variant="p">
                                Discord上にゲームコミュニティを作成した。<br />
                                前述の「ゆるプロ▽」の原型となるコミュニティになっており、<br />
                                Discordによる学習環境作成の可能性を知るきっかけとなった。<br /><br />
                        </Typography>
                        <CardMedia component="img" image={ikabo1} alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Comumnity;