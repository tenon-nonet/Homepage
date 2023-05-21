
import { Typography, CardMedia, } from "@mui/material";
import stable1 from "../../../assets/img/playgroud/ai/stable1.webp";
import stable2 from "../../../assets/img/playgroud/ai/stable2.webp";
import stable3 from "../../../assets/img/playgroud/ai/stable3.webp";
const Ai = () => {
        return (
                <>
                        <Typography variant="h5">・StableDiffusion</Typography>
                        <Typography variant="p">
                                画像生成AI。<br /><br />
                                ローカル環境で生成できる様に<br />
                                StableDiffusionUIを導入した<br /><br />
                                背景画像の生成や、アイコンの作成に活用している<br />
                                以下の画像や、画面左上の画像、faviconにも使用している<br /><br />
                                他のアプリでも使用しており、汎用性が高い。<br />
                        </Typography>
                        <CardMedia component="img" image={stable1} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={stable2} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={stable3} alt="MyIcon" style={{ width: "100%" }} />
                        <hr /><br />
                        <Typography variant="h5">・ChatGPT</Typography>
                        <Typography variant="p">
                                プログラミング学習の際に<br />
                                質問をする場所として活用している。<br /><br />
                                内容の真偽を確認しながらの活用となるが、<br />
                                GPT-4に関しては制度も上がっており、<br />
                                方向性の確認や、きっかけを掴むのに役立っている。<br /><br />
                                プログラミングの講師としての立ち位置である。<br />
                        </Typography><hr /><br />
                        <Typography variant="h5">・GitHUB Copilot</Typography>
                        <Typography variant="p">
                                5月から使用。<br />
                                VSCodeでの予測変換の精度が高い。<br />
                                間違いもある為、都度内容を確認しながらにはなるが、<br />
                                開発効率が高くなったことは間違いない。<br /><br />
                                私の学習効率が上がったことも間違いない。<br />
                        </Typography>
                </>
        );
};

export default Ai;