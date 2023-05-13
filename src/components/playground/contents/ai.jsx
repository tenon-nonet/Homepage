
import { Typography, CardMedia, } from "@mui/material";
const Ai = () => {
        return (
                <>
                        <Typography variant="h5">・StableDiffusion</Typography><br />
                        <Typography variant="p">
                                画像生成AI。<br />
                                ローカル環境で生成できる様にStableDiffusionUIを導入した<br />
                                背景画像の生成や、アイコンの作成に活用している<br /><br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                        <hr />
                        <Typography variant="h5">・ChatGPT</Typography><br />
                        <Typography variant="p">
                                <br />
                                <br />
                                <br /><br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Ai;