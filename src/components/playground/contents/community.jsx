
import { Typography, CardMedia, } from "@mui/material";
const Comumnity = () => {
        return (
                <>
                        <Typography variant="h5">・Discord</Typography><br />
                        <Typography variant="p">
                                プログラマーコミュニティ「ゆるプロ▽」を作成<br />
                                継続的な学習のための環境を作り、多くのプログラマーと交流ができる。<br />
                                これが無ければ今の私は、ない。<br /><br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                        <br /><hr />
                        <Typography variant="h5">・イカボッチ</Typography><br />
                        <Typography variant="p">
                                Splatoon3コミュニティ「イカボッチ」を作成<br />
                                <br />
                                <br /><br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Comumnity;