import { Typography, CardMedia, Link } from "@mui/material";
import thread1 from "../../../assets/img/application/thread/thread1.webp";
import thread2 from "../../../assets/img/application/thread/thread2.webp";
const dddThreds = () => {
        return (
                <>
                        <Typography variant="h5">・SDPs Threads</Typography><br />
                        <Typography variant="p">
                                ２ちゃんねる風の掲示板<br />
                                PHPを使用して作成。<br />
                                SQLの基本操作とDBの構造理解を網羅している<br /><br />
                                コメント、スレッドの管理の為SSH接続を行い、<br />
                                コマンドライン上でのDB操作の学習も行なった。<br /><br />
                                現在はコメント投稿、スレッド作成機能のみだが、<br />
                                削除機能、検索機能を追加する予定。<br /><br />  
                                <Link href="https://threads.tenon-nonet.com">threads.tenon-nonet.com</Link><br /><br />
                                
                        </Typography>
                        <CardMedia sx={{marginTop: "10px"}} component="img" image={thread1} alt="MyIcon" style={{ height: "100%" }} />
                        <CardMedia component="img" image={thread2} alt="MyIcon" style={{ height: "100%" }} />
                </>
        );
};

export default dddThreds;