import { Typography, CardMedia, Link } from "@mui/material";
const dddThreds = () => {
        return (
                <>
                        <Typography variant="h5">・SPDs Threads</Typography>
                        <br/>
                        <Typography variant="p">
                                ２ちゃんねる風の掲示板<br />
                                PHPを使用して作成。DB操作の基本的な構造を網羅している<br /><br/>
                                <Link href="https://threads.tenon-nonet.com">threads.tenon-nonet.com</Link>
                        </Typography>
                        <br/><br />
                        <CardMedia component="img" image="./images/2chan/2chan1.webp" alt="MyIcon" style={{ height: "100%" }} />
                        <CardMedia component="img" image="./images/2chan/2chan2.webp" alt="MyIcon" style={{ height: "100%" }} />
                        
                        
                </>
        );
};

export default dddThreds;