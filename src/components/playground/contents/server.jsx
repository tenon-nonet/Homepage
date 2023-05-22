import { Typography } from "@mui/material";
const Server = () => {
        return (
                <>
                        <Typography variant="h5">・AWS</Typography>
                        <Typography variant="p">
                                Webアプリを初めてデプロイするために使用した。<br /><br />
                                初めてのデプロイ作業はかなり混乱したが、<br />
                                Cloud9、EC2とRoute53を使用してアプリのデプロイは完了した。<br /><br />
                                維持費がかかる為、現在は後述のVultrに移行している。<br />
                        </Typography>
                        <br /><hr />
                        <Typography variant="h5">・Vultr</Typography>
                        <Typography variant="p">
                                現在メインで使用しているVPSとなる。<br />
                                初期費用と維持費が安価とのことで使用を開始した。<br /><br />
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
                                また、DNSの設定を行うことで、ドメインの管理も行っている。<br /><br />
                        </Typography>
                </>
        );
};

export default Server;