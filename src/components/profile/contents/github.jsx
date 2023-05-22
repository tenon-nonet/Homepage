
import { Typography, CardMedia} from "@mui/material";
import github1 from "../../../assets/img/profile/github1.webp";
const github = () => {
    return (
        <>
            <Typography variant="h5">・GitHub</Typography>
            <Typography variant="p">
                <a href="https://github.com/tenon-nonet">https://github.com/tenon-nonet</a><br /><br />
                開発しているアプリのソースコードを管理している。<br />
                学習当初はGitの使い方すらわかっていなかったが、<br />
                共同開発を行う中で、使い方を習得していった。<br />
                現在はGitの基本操作は問題なく行えるところまで来ており、<br />
                積極的にコミットを行っている。<br /><br />

                <CardMedia component="img" image={github1} alt="MyIcon" style={{ width: "100%" }} />
            </Typography>
            <hr />
        </>
    );
};

export default github;