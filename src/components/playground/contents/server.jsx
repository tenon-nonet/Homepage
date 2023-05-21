import { Typography } from "@mui/material";
const Server = () => {
        return (
                <>
                        <Typography variant="h5">・AWS</Typography>
                        <Typography variant="p">
                                Webアプリを初めてデプロイするために使用した。<br /><br />
                                初めてのデプロイ作業はかなり混乱したが、<br />
                                EC2とRoute53を使用してアプリのデプロイは完了した。<br /><br />
                                現在は後述のVultrに移行している。<br />
                        </Typography>
                        <br /><hr />
                        <Typography variant="h5">・Vultr</Typography>
                        <Typography variant="p">
                                現在メインで使用しているVPSとなる。<br /><br />
                                SSH接続、Linux・CentOSの操作、公開・秘密鍵の管理、<br />
                                vimやnanoを使用した設定ファイルの修正、<br />
                                VPSでのデプロイの手順など、<br />
                                バックエンドの理解がかなり深まった。<br /><br />
                                AWSよりは使用しやすく、理解しやすかったため、<br />
                                しばらくはこれを使用予定
                        </Typography><br /><br /><hr />
                        <Typography variant="h5">・Cloudflare</Typography>
                        <Typography variant="p">
                                ドメインのセキュリティの向上のために使用。<br /><br />
                                また、DNSの設定を行うことで、<br />
                                ドメインの管理を行っている。<br /><br />
                        </Typography>
                </>
        );
};

export default Server;