
import { Typography, CardMedia, Link } from "@mui/material";
import dddspeaker1 from "../../../assets/img/application/dddspeaker/dddspeaker1.webp";
import dddspeaker2 from "../../../assets/img/application/dddspeaker/dddspeaker2.webp";
const dddSpeaker = () => {
        return (
                <>
                        <Typography variant="h5">・DDDSpeaker</Typography><br />
                        <Typography variant="p">
                                VOICEVOXを使って、テキストの読み上げができるのだ。<br />
                                初めての共同開発したアプリなのだ。<br /><br />
                                LiveShare、GitHUBを活用して開発を行ったのだ。<br /><br />
                                APIを使用した初めてのアプリであり、<br />
                                初めてフロントエンドを作成したアプリでもあるのだ。<br /><br />
                                また、初めてデプロイしたアプリでもあるのだ。<br /><br />
                                <Link href="https://speaker.tenon-nonet.com">speaker.tenon-nonet.com</Link>
                        </Typography>
                        <CardMedia sx={{marginTop: "10px"}} component="img" image={dddspeaker1} alt="dddspeaker1" style={{ height: "100%" }} />
                        <CardMedia component="img" image={dddspeaker2} alt="dddspeaker2" style={{ height: "100%" }} />
                </>
        );
};

export default dddSpeaker;