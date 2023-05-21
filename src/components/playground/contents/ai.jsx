
import { Typography, CardMedia, } from "@mui/material";
import stable1 from "../../../assets/img/playgroud/ai/stable1.webp";
import stable2 from "../../../assets/img/playgroud/ai/stable2.webp";
import stable3 from "../../../assets/img/playgroud/ai/stable3.webp";
const Ai = () => {
        return (
                <>
                        <Typography variant="h5">・StableDiffusion</Typography>
                        <Typography variant="p">
                                画像生成AI。<br />
                                ローカル環境で生成できる様にStableDiffusionUIを導入した<br />
                                背景画像の生成や、アイコンの作成に活用している
                        </Typography>
                        <CardMedia component="img" image={stable1} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={stable2} alt="MyIcon" style={{ width: "100%" }} />
                        <CardMedia component="img" image={stable3} alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Ai;