import Image from 'next/image';
import Container from '@/components/Container/Container';
import Br from '@/components/Br/Br';
import Heading from '@/components/Heading/Heading';
import PostBody from '@/components/PostBody/PostBody';
import bookImg from '@/images/service_book.png';
import cameraImg from '@/images/service_camera.png';
import gokuImg from '@/images/service_map.png';
import mapImg from '@/images/service_map.png';
import phoneImg from '@/images/service_phone.png';
import scannerImg from '@/images/service_scanner.png';
import templeImg from '@/images/service_temple.png';
import tobaImg from '@/images/service_toba.png';
import websiteImg from '@/images/service_website.png';
import styles from './Service.module.scss';

const services = [
  {
    name: '寺院エキスパートシステム',
    src: gokuImg,
    desc: '寺院管理に必要な機能を備えた「寺院エキスパートシステム」の導入から、導入後のサポートまで対応します。',
  },
  {
    name: '墓地図制作',
    src: mapImg,
    desc: '墓地図面の有無に関わらず、電子図面を作成いたします。',
  },
  {
    name: '過去帳和綴じ制作',
    src: bookImg,
    desc: '寺院に所属する檀家の戒名（法号・法名）、俗名、死亡年月日、享年などを記録した帳簿を作成します。',
  },
  {
    name: '塔婆システムサポート',
    src: tobaImg,
    desc: '誰でも簡単に塔婆に印刷できるユーティリティソフトのサポートを行います。塔婆だけでなく、白木位牌や木札のレイアウトにも対応しています。',
  },
  {
    name: 'コピー（複合機）／パソコン・LANシステム サポート',
    src: scannerImg,
    desc: 'コピー（複合機）・パソコン・LANシステムの導入から運用までサポートいたします。',
  },
  {
    name: '防犯用監視カメラ',
    src: cameraImg,
    desc: '防犯用監視カメラの導入から運用までサポートいたします。',
  },
  {
    name: 'ビジネスフォン',
    src: phoneImg,
    desc: 'ビジネスフォンの導入から運用までサポートいたします。',
  },
  {
    name: '寺務支援',
    src: templeImg,
    desc: '寺院用パソコンソフトの運用指導・メンテナンスのほか、檀信徒管理や経理事務、行事案内などの事務処理をサポートします。',
  },
  {
    name: 'Webサイト制作サポート',
    src: websiteImg,
    desc: 'Webサイトの制作をおこないます。',
  },
];

export default function Service() {
  return (
    <Container>
      <Heading>当社サービスのご案内</Heading>

      <PostBody>
        <p>
          当社は寺院エキスパートシステムに加え、
          <Br device="pc" />
          ご寺院さまの業務をサポートする幅広いサービスをご用意しています。
        </p>
      </PostBody>

      <ul className={styles.services}>
        {services.map(({ name, src, desc }) => {
          return (
            <li className={styles.service} key={name}>
              <figure className={styles.image}>
                <Image
                  src={src}
                  alt={name}
                  width="160"
                  height="160"
                  loading="lazy"
                />
              </figure>

              <h3 className={styles.term}>{name}</h3>

              <p>{desc}</p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
