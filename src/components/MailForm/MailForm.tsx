'use client';

import { FormEvent, useState, useEffect } from 'react';
import Container from '@/components/Container/Container';
import Br from '@/components/Br/Br';
import Heading from '@/components/Heading/Heading';
import Lead from '@/components/Lead/Lead';
import styles from './MailForm.module.scss';

export default function MailForm() {
  const [sendStatus, setSendStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
  });

  const { name, email, tel, message } = formData;

  // 入力処理の共通化
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ボタンの有効判定
  const isDisabled =
    !name.trim() ||
    !email.trim() ||
    !message.trim() ||
    sendStatus === 'sending';

  // メールチェック（関数化して再利用しやすく）
  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  // 成功後5秒でトースト非表示
  useEffect(() => {
    if (sendStatus !== 'success') return;
    const timer = setTimeout(() => setSendStatus('idle'), 5000);
    return () => clearTimeout(timer);
  }, [sendStatus]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendStatus('sending');

    // バリデーション
    if (!name || !email || !message || !isValidEmail(email)) {
      setSendStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        setSendStatus('error');
        return;
      }

      // 成功
      setSendStatus('success');
      setFormData({ name: '', email: '', tel: '', message: '' });
    } catch {
      setSendStatus('error');
    }
  };

  return (
    <Container>
      <Heading>メールフォーム</Heading>

      <Lead>
        <p>
          サービスに関するお問い合わせは、お電話またはメールフォームで承っております。
          <Br />
          お悩みやご相談は、いつでもお気軽にお問い合わせください。
        </p>
      </Lead>

      {/* トースト（成功 or エラー共通） */}
      {sendStatus !== 'idle' && sendStatus !== 'sending' && (
        <div className={styles.toast} data-status={sendStatus}>
          {sendStatus === 'success'
            ? '送信が完了しました！'
            : '送信に失敗しました。入力内容をご確認ください。'}
        </div>
      )}

      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="name">
            会社名／寺院名<span className={styles.required}>必須</span>
          </label>
          <input
            id="name"
            className={styles.input}
            type="text"
            name="name"
            value={name}
            placeholder="例）普蔵院"
            autoComplete="organization"
            onChange={handleChange}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label} htmlFor="email">
            メールアドレス<span className={styles.required}>必須</span>
          </label>
          <input
            id="email"
            className={styles.input}
            type="text"
            name="email"
            value={email}
            placeholder="例）abc@mail.co.jp"
            autoComplete="email"
            onChange={handleChange}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label} htmlFor="tel">
            電話番号
          </label>
          <input
            id="tel"
            className={styles.input}
            type="tel"
            name="tel"
            value={tel}
            placeholder="例）012-345-6789"
            autoComplete="tel"
            onChange={handleChange}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label} htmlFor="message">
            お問い合わせ内容<span className={styles.required}>必須</span>
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            name="message"
            value={message}
            placeholder="お問合わせ内容をご入力ください。"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className={styles.btns}>
          <button className={styles.button} type="submit" disabled={isDisabled}>
            {sendStatus === 'sending' ? '送信中…' : '送信'}
          </button>
        </div>
      </form>
    </Container>
  );
}
