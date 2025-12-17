import Image from 'next/image';
import styles from './Service.module.scss';

const data = {
  contents: [
    {
      id: 'templeSupport',
      name: '寺務支援',
      image: {
        url: '/images/icon_service_temple.svg',
        width: 128,
        height: 128,
      },
      desc: '寺院用パソコンソフトの運用指導・メンテナンスのほか、檀信徒管理や経理事務、行事案内などの事務処理をサポートします。',
    },
    {
      id: 'cemeteryMap',
      name: '墓地図制作',
      image: {
        url: '/images/icon_service_map.svg',
        width: 128,
        height: 128,
      },
      desc: '墓地図面の有無に関わらず、電子図面を作成いたします。',
    },
    {
      id: 'kakochoBookbinding',
      name: '過去帳和綴じ制作',
      image: {
        url: '/images/icon_service_book.svg',
        width: 128,
        height: 128,
      },
      desc: '寺院に所属する檀家の戒名（法号・法名）、俗名、死亡年月日、享年などを記録した帳簿を作成します。',
    },
    {
      id: 'tobaSystemSupport',
      name: '塔婆システムサポート',
      image: {
        url: '/images/icon_service_woodenGraveTablet.svg',
        width: 128,
        height: 128,
      },
      desc: '誰でも簡単に塔婆に印刷できるユーティリティソフトのサポートを行います。塔婆だけでなく、白木位牌や木札のレイアウトにも対応しています。',
    },
    {
      id: 'officeItSupport',
      name: 'コピー（複合機）／パソコン・LANシステム サポート',
      image: {
        url: '/images/icon_service_printer.svg',
        width: 128,
        height: 128,
      },
      desc: 'コピー（複合機）・パソコン・LANシステムの導入から運用までサポートいたします。',
    },
    {
      id: 'securityCamera',
      name: '防犯用監視カメラ',
      image: {
        url: '/images/icon_service_camera.svg',
        width: 128,
        height: 128,
      },
      desc: '防犯用監視カメラの導入から運用までサポートいたします。',
    },
    {
      id: 'businessPhone',
      name: 'ビジネスフォン',
      image: {
        url: '/images/icon_service_phone.svg',
        width: 128,
        height: 128,
      },
      desc: 'ビジネスフォンの導入から運用までサポートいたします。',
    },
    {
      id: 'websiteDevelopment',
      name: 'Webサイト制作サポート',
      image: {
        url: '/images/icon_service_develop.svg',
        width: 128,
        height: 128,
      },
      desc: 'Webサイトの制作をおこないます。',
    },
  ],
};

export default function Service() {
  return (
    <div className={styles.cards}>
      {data.contents.map((service) => {
        return (
          <article key={service.id} className={styles.card}>
            <div className={styles.head}>
              <h3 className={styles.heading}>{service.name}</h3>

              <figure className={styles.feature}>
                <Image
                  src={service.image.url}
                  alt={`${service.name}のアイコン`}
                  width={service.image.width}
                  height={service.image.height}
                  loading="lazy"
                />
              </figure>
            </div>

            <div className={styles.body}>
              <p>{service.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
