
import { Typography, CardMedia, Link } from "@mui/material";
const dddSpeaker = () => {
        return (
                <>
                        <CardMedia component="img" image="./images/dddspeaker/dddspeaker1.webp" alt="dddspeaker1" style={{ height: "100%" }} />
                        <CardMedia component="img" image="./images/dddspeaker/dddspeaker2.webp" alt="dddspeaker1" style={{ height: "100%" }} />
                        <Typography variant="h2">・DDDSpeaker</Typography>
                        <Typography variant="p">
                                VOICEVOXを使って、テキストの読み上げができるのだ。<br />
                                初めての共同開発なのだ。LiveShare、GitHUBなどを活用して開発を行ったのだ。<br />
                                初めてデプロイしたアプリでもあるのだ。<br />
                                <Link href="https://speaker.tenon-nonet.com">speaker.tenon-nonet.com</Link>
                        </Typography>
                </>
        );
};

export default dddSpeaker;