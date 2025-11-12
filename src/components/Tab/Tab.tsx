'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import supporter001Img from '@/images/expert_supporter001.png';
import supporter002Img from '@/images/expert_supporter002.png';
import payment001Img from '@/images/expert_payment001.png';
import payment002Img from '@/images/expert_payment002.png';
import payment003Img from '@/images/expert_payment003.png';
import deposit001Img from '@/images/expert_deposit001.png';
import deposit002Img from '@/images/expert_deposit002.png';
import deposit003Img from '@/images/expert_deposit003.png';
import deposit004Img from '@/images/expert_deposit004.png';
import deposit005Img from '@/images/expert_deposit005.png';
import postalTransfer001Img from '@/images/expert_postalTransfer001.png';
import postalTransfer002Img from '@/images/expert_postalTransfer002.png';
import postalTransfer003Img from '@/images/expert_postalTransfer003.png';
import buddhistName001Img from '@/images/expert_buddhistName001.png';
import buddhistName002Img from '@/images/expert_buddhistName002.png';
import tanagyo001Img from '@/images/expert_tanagyo001.png';
import tanagyo002Img from '@/images/expert_tanagyo002.png';
import styles from './Tab.module.scss';

export const expertTabs = [
  {
    id: '01',
    name: '檀家管理',
    panels: [
      {
        src: supporter001Img,
        alt: '檀家台帳画面',
        width: 852,
        height: 612,
        captions: [
          '檀家台帳で「戸主情報」「準戸主」「家族」「過去帳」「日記」「行事」「回忌」「入金」「墓地」を一元管理。',
          '檀家情報の検索・登録・修正・削除が可能。',
        ],
      },
      {
        src: supporter002Img,
        alt: '表示倍率の設定画面',
        width: 553,
        height: 316,
        captions: ['画面文字を拡大・縮小して見やすく調整可能。'],
      },
    ],
  },
  {
    id: '02',
    name: '収支計算',
    panels: [
      {
        src: payment001Img,
        alt: '収支計算メニュー画面',
        width: 810,
        height: 534,
        captions: [
          '家計簿方式で簡単に入力。',
          'データ入力期間は最大18ヶ月まで拡張。',
          '檀家管理と連動して効率化。',
        ],
      },
      {
        src: payment002Img,
        alt: '帳票出力画面',
        width: 1024,
        height: 460,
        captions: ['宗教法人向けに対応した帳票を出力。'],
      },
      {
        src: payment003Img,
        alt: '収支計算書画面',
        width: 759,
        height: 649,
        captions: ['収支計算書の書式をカスタマイズ可能。'],
      },
    ],
  },
  {
    id: '03',
    name: '入金管理',
    panels: [
      {
        src: deposit001Img,
        alt: '入金管理メニュー画面',
        width: 810,
        height: 534,
        captions: [
          '家計簿方式で簡単に入力。',
          'データ入力期間は最大18ヶ月まで拡張。',
          '収支計算と連動して効率化。',
        ],
      },
      {
        src: deposit002Img,
        alt: '入金データ入力画面',
        width: 923,
        height: 1300,
        captions: ['導入年度以前のデータも入力可能。'],
      },
      {
        src: deposit003Img,
        alt: '案内発行（控え）画面',
        width: 1156,
        height: 758,
        captions: ['各種案内を発行可能。'],
      },
      {
        src: deposit004Img,
        alt: '他年度検索個別集計画面',
        width: 915,
        height: 696,
        captions: ['多年度集計で入金履歴を参照可能。'],
      },
      {
        src: deposit005Img,
        alt: '領収書発行画面',
        width: 724,
        height: 1804,
        captions: ['領収書を発行可能。'],
      },
    ],
  },
  {
    id: '04',
    name: '郵便振替',
    panels: [
      {
        src: postalTransfer001Img,
        alt: '郵便振替メニュー画面',
        width: 676,
        height: 450,
        captions: [
          '自由に編集できる書式作成機能。',
          '檀家管理と連動。',
          '入金管理と連動（会費・寄付情報を参照可能）。',
        ],
      },
      {
        src: postalTransfer002Img,
        alt: '書式選択画面',
        width: 1024,
        height: 1300,
        captions: [
          '郵便振替用紙（郵政公社配布）およびA4単票用紙に対応。',
          '印刷対象者を保存して再利用可能。',
        ],
      },
      {
        src: postalTransfer003Img,
        alt: '対象者一覧画面',
        width: 675,
        height: 456,
        captions: ['条件設定で任意の印刷対象者を選択可能。'],
      },
    ],
  },
  {
    id: '05',
    name: '戒名作成',
    panels: [
      {
        src: buddhistName001Img,
        alt: '戒名作成メニュー画面',
        width: 676,
        height: 450,
        captions: ['50,000語の二字熟字辞書機能で全宗派に対応。'],
      },
      {
        src: buddhistName002Img,
        alt: '戒名入力画面',
        width: 762,
        height: 1340,
        captions: [
          '作成した法名・戒名を過去帳へコピー可能。',
          '平仄・重複戒名・適合性などの評価機能が充実。',
          '対句・性格・趣味・季節なども考慮。',
        ],
      },
    ],
  },
  {
    id: '06',
    name: '棚経管理',
    panels: [
      {
        src: tanagyo001Img,
        alt: '棚経管理メニュー画面',
        width: 676,
        height: 450,
        captions: ['お盆棚経・お彼岸廻りの行動予定表を作成。'],
      },
      {
        src: tanagyo002Img,
        alt: '入力状況の確認画面',
        width: 1024,
        height: 1335,
        captions: [
          '僧侶を最大99人まで登録・管理可能。',
          '檀信徒をカナ順で並べた予定表を出力。',
          '檀信徒への案内に日付・順番・予定時間を出力可能。',
          '檀信徒へのラベルを出力可能。',
        ],
      },
    ],
  },
];

export default function Tab() {
  const [tabIsActive, setTabIsActive] = useState(expertTabs[0].id);

  return (
    <Container>
      <Heading>機能</Heading>

      <div className={styles.wrapper}>
        <ul className={styles.tabs} data-tabs>
          {expertTabs.map(({ id, name }, index) => (
            <li
              key={index}
              className={styles.tab}
              data-tab={id}
              data-active={tabIsActive === id ? 'true' : 'false'}
              onClick={() => setTabIsActive(id)}
              role="button"
              tabIndex={0}
            >
              {name}
            </li>
          ))}
        </ul>

        {expertTabs.map(({ id, panels }) => (
          <div
            key={id}
            className={styles.panel}
            data-panel={id}
            data-active={tabIsActive === id ? 'true' : 'false'}
          >
            <div className={styles.contents}>
              {panels.map(({ src, alt, width, height, captions }, index) => (
                <figure key={index} className={styles.image}>
                  <Image src={src} alt={alt} width={width} height={height} />
                  <figcaption>
                    {captions.map((text, i) => (
                      <span key={i}>
                        {text}
                        {i < captions.length - 1 && <br />}
                      </span>
                    ))}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
