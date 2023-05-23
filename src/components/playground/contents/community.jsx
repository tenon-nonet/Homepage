
import { Typography, CardMedia, } from "@mui/material";
import discord1 from "../../../assets/img/playgroud/community/discord1.webp"
const Comumnity = () => {
        return (
                <>
                <hr />
                        <Typography variant="h5">・Discord</Typography><br />
                        <Typography variant="p">1.プログラミングコミュニティ</Typography><br />
                        <Typography variant="p">
                                2023年3月、Discord上にプログラマーコミュニティを作成<br />
                                継続的な学習のための環境と、<br />
                                情報共有の場として活用している。<br /><br />
                                2023年5月現在42名が所属しており、<br />
                                多くのプログラミング学習者と交流ができる。<br /><br /><br />
                                </Typography>
                                <Typography variant="p">2.ゲームコミュニティ</Typography><br />
                                <Typography variant="p">        
                                2023年1月に、Discord上にゲームコミュニティを作成しており、<br />
                                こちらは5月現在70名ほどが所属している。<br /><br />
                                前述のプログラミングコミュニティの原型となるコミュニティになっていた。<br />
                                Discordによる学習環境作成の可能性を知るきっかけとなった。<br /><br />
                                これらが無ければ今の私はいないだろう。<br /><br /><br />
                                以下はプログラミングコミュニティの募集文。<br /><br />
                        </Typography>
                        <CardMedia component="img" image={discord1} alt="MyIcon" style={{ width: "100%" }} />

                </>
        );
};

export default Comumnity;