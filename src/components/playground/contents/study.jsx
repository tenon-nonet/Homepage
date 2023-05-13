import { Typography, CardMedia, } from "@mui/material";
const Study = () => {
        return (
                <>
                        <Typography variant="h5">・Udemy</Typography><br />
                        <Typography variant="p">
                                Youtubeでの学習の拡張のために活用。<br />
                                PHPの学習講座を受講完了した。<br /><br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                        <br /><hr />
                        <Typography variant="h5">・paiza</Typography><br />
                        <Typography variant="p">
                                新しく学習している言語に慣れるために利用。<br />
                                C問題はできる。B問題はできない。できたい。<br /><br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Study;