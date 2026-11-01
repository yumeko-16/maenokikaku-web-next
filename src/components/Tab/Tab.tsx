'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Tab.module.scss';

const TABS = [
  {
    id: '01',
    name: '檀家管理',
    panels: [
      {
        image: {
          url: '/images/seiran496/temple_member_registry.webp',
          alt: '檀家台帳画面',
          width: 840,
          height: 544,
        },
        caption: [
          <>
            檀家台帳で「戸主情報」「準戸主」「家族」「過去帳」「日記」「行事」「回忌」「入金」「墓地」を一元管理。
            <br />
            檀家情報の検索・登録・修正・削除が可能。
          </>,
        ],
      },
      {
        image: {
          url: '/images/seiran496/display_magnification_setting.webp',
          alt: '表示倍率の設定画面',
          width: 840,
          height: 544,
        },
        caption: ['画面文字を拡大・縮小して見やすく調整可能。'],
      },
    ],
  },
  {
    id: '02',
    name: '収支計算',
    panels: [
      {
        image: {
          url: '/images/seiran496/income_expense_menu.webp',
          alt: '収支計算メニュー画面',
          width: 655,
          height: 443,
        },
        caption: [
          <>
            家計簿方式で簡単に入力。
            <br />
            データ入力期間は最大18ヶ月まで拡張。
            <br />
            檀家管理と連動して効率化。
          </>,
        ],
      },
      {
        image: {
          url: '/images/seiran496/income_expense_preview.webp',
          alt: '収支計算書 印刷プレビュー画面',
          width: 1024,
          height: 460,
        },
        caption: ['宗教法人向けに対応した帳票を出力。'],
      },
      {
        image: {
          url: '/images/seiran496/income_expense_calculation.webp',
          alt: '収支計算書画面',
          width: 759,
          height: 649,
        },
        caption: ['収支計算書の書式をカスタマイズ可能。'],
      },
    ],
  },
  {
    id: '03',
    name: '入金管理',
    panels: [
      {
        image: {
          url: '/images/seiran496/payment_management_menu.webp',
          alt: '入金管理メニュー画面',
          width: 762,
          height: 517,
        },
        caption: [
          <>
            家計簿方式で簡単に入力。
            <br />
            データ入力期間は最大18ヶ月まで拡張。
            <br />
            収支計算と連動して効率化。
          </>,
        ],
      },
      {
        image: {
          url: '/images/seiran496/payment_registration.webp',
          alt: '入金データ登録画面',
          width: 525,
          height: 475,
        },
        caption: ['導入年度以前のデータも入力可能。'],
      },
      {
        image: {
          url: '/images/seiran496/payment_notice_list.webp',
          alt: '案内発行（控え）画面',
          width: 879,
          height: 669,
        },
        caption: ['各種案内を発行可能。'],
      },
      {
        image: {
          url: '/images/seiran496/multiyear_search.webp',
          alt: '多年度検索個別集計画面',
          width: 915,
          height: 696,
        },
        caption: ['多年度集計で入金履歴を参照可能。'],
      },
      {
        image: {
          url: '/images/seiran496/receipt_issued.webp',
          alt: '領収書発行画面',
          width: 724,
          height: 1804,
        },
        caption: ['領収書を発行可能。'],
      },
    ],
  },
  {
    id: '04',
    name: '郵便振替',
    panels: [
      {
        image: {
          url: '/images/seiran496/postal_transfer_menu.webp',
          alt: '郵便振替メニュー画面',
          width: 651,
          height: 445,
        },
        caption: [
          <>
            自由に編集できる書式作成機能。
            <br />
            檀家管理と連動。
            <br />
            入金管理と連動（会費・寄付情報を参照可能）。
          </>,
        ],
      },
      {
        image: {
          url: '/images/seiran496/postal_transfer_printing.webp',
          alt: '書式選択画面',
          width: 1024,
          height: 1300,
        },
        caption: [
          <>
            郵便振替用紙（郵政公社配布）およびA4単票用紙に対応。
            <br />
            印刷対象者を保存して再利用可能。
          </>,
        ],
      },
      {
        image: {
          url: '/images/seiran496/print_target_list.webp',
          alt: '対象者一覧画面',
          width: 675,
          height: 456,
        },
        caption: ['条件設定で任意の印刷対象者を選択可能。'],
      },
    ],
  },
  {
    id: '05',
    name: '戒名作成',
    panels: [
      {
        image: {
          url: '/images/seiran496/dharma_name_menu.webp',
          alt: '戒名作成メニュー画面',
          width: 655,
          height: 443,
        },
        caption: ['50,000語の二字熟字辞書機能で全宗派に対応。'],
      },
      {
        image: {
          url: '/images/seiran496/dharma_name_create.webp',
          alt: '戒名入力画面',
          width: 762,
          height: 1340,
        },
        caption: [
          <>
            作成した法名・戒名を過去帳へコピー可能。
            <br />
            平仄・重複戒名・適合性などの評価機能が充実。
            <br />
            対句・性格・趣味・季節なども考慮。
          </>,
        ],
      },
    ],
  },
  {
    id: '06',
    name: '棚経管理',
    panels: [
      {
        image: {
          url: '/images/seiran496/shelf_sutra.webp',
          alt: '棚経管理メニュー画面',
          width: 655,
          height: 443,
        },
        caption: ['お盆棚経・お彼岸廻りの行動予定表を作成。'],
      },
      {
        image: {
          url: '/images/seiran496/shelf_sutra_output.webp',
          alt: '入力状況の確認画面',
          width: 1024,
          height: 1335,
        },
        caption: [
          <>
            僧侶を最大99人まで登録・管理可能。
            <br />
            檀信徒をカナ順で並べた予定表を出力。
            <br />
            檀信徒への案内に日付・順番・予定時間を出力可能。
            <br />
            檀信徒へのラベルを出力可能。
          </>,
        ],
      },
    ],
  },
];

export default function Tab() {
  const [tabIsActive, setTabIsActive] = useState(TABS[0].id);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.tabs} data-tabs>
        {TABS.map((tab) => (
          <li
            key={tab.id}
            className={styles.tab}
            data-tab={tab.id}
            data-active={tabIsActive === tab.id ? 'true' : 'false'}
            onClick={() => setTabIsActive(tab.id)}
            role="button"
            tabIndex={0}
          >
            {tab.name}
          </li>
        ))}
      </ul>

      {TABS.map((tab) => (
        <div
          key={tab.id}
          className={styles.panel}
          data-panel={tab.id}
          data-active={tabIsActive === tab.id ? 'true' : 'false'}
        >
          <div className={styles.contents}>
            {tab.panels.map((panel, index) => (
              <figure key={index} className={styles.image}>
                <Image
                  src={panel.image.url}
                  alt={panel.image.alt}
                  width={panel.image.width}
                  height={panel.image.height}
                />

                <figcaption>
                  {panel.caption.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
