import Image from 'next/image';
import styles from './Service.module.scss';

const SERVICES = [
  {
    heading: '寺務支援',
    image: '/images/icon_service_temple.svg',
    description:
      '寺院用パソコンソフトの運用指導・メンテナンスのほか、檀信徒管理や経理事務、行事案内などの事務処理をサポートします。',
  },
  {
    heading: '墓地図制作',
    image: '/images/icon_service_map.svg',
    description: '墓地図面の有無に関わらず、電子図面を作成いたします。',
  },
  {
    heading: '過去帳和綴じ制作',
    image: '/images/icon_service_book.svg',
    description:
      '寺院に所属する檀家の戒名（法号・法名）、俗名、死亡年月日、享年などを記録した帳簿を作成します。',
  },
  {
    heading: '塔婆システムサポート',
    image: '/images/icon_service_woodenGraveTablet.svg',
    description:
      '誰でも簡単に塔婆に印刷できるユーティリティソフトのサポートを行います。塔婆だけでなく、白木位牌や木札のレイアウトにも対応しています。',
  },
  {
    heading: 'コピー（複合機）／パソコン・LANシステム サポート',
    image: '/images/icon_service_printer.svg',
    description:
      'コピー（複合機）・パソコン・LANシステムの導入から運用までサポートいたします。',
  },
  {
    heading: '防犯用監視カメラ',
    image: '/images/icon_service_camera.svg',
    description: '防犯用監視カメラの導入から運用までサポートいたします。',
  },
  {
    heading: 'ビジネスフォン',
    image: '/images/icon_service_phone.svg',
    description: 'ビジネスフォンの導入から運用までサポートいたします。',
  },
  {
    heading: 'Webサイト制作サポート',
    image: '/images/icon_service_develop.svg',
    description: 'Webサイトの制作をおこないます。',
  },
];

export default function Service() {
  return (
    <div className={styles.cards}>
      {SERVICES.map((service) => {
        return (
          <article key={service.heading} className={styles.card}>
            <div className={styles.head}>
              <h3 className={styles.heading}>{service.heading}</h3>

              <figure className={styles.image}>
                <Image
                  src={service.image}
                  alt=""
                  width={128}
                  height={128}
                  loading="lazy"
                />
              </figure>
            </div>

            <div>
              <p>{service.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
