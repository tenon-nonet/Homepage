import { Typography, CardMedia, } from "@mui/material";
const Server = () => {
        return (
                <>
                        <Typography variant="h5">・AWS</Typography><br />
                        <Typography variant="p">
                                Webアプリを初めてデプロイするために使用した。<br />
                                EC2とRoute53を使用してデプロイは完了したが、<br />
                                保守性が確保できなかったので、VPSのVultrに移行した。<br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                        <br /><hr />
                        <Typography variant="h5">・Vultr</Typography><br />
                        <Typography variant="p">
                                現在はこれを使用している。<br />
                                EC2とRoute53を使用してデプロイは完了したが、<br />
                                AWSよりは使用しやすく、理解も進めやすかったため、しばらくはこれを使用予定<br />
                        </Typography>
                        <br /><br />
                        <CardMedia component="img" image="./images/content.webp" alt="MyIcon" style={{ width: "100%" }} />
                </>
        );
};

export default Server;