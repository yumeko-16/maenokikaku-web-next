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

  // 入力状態の管理
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // ボタンの有効/無効判定
  const isDisabled = !name.trim() || !email.trim() || !message.trim();

  // 送信完了後にメッセージを自動で非表示
  useEffect(() => {
    if (sendStatus === 'success') {
      const timer = setTimeout(() => setSendStatus('idle'), 5000); // 5秒後に非表示
      return () => clearTimeout(timer); // クリーンアップ
    }
  }, [sendStatus]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendStatus('sending');

    const form = e.currentTarget;
    const tel = (
      form.elements.namedItem('tel') as HTMLInputElement
    ).value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message || !emailRegex.test(email)) {
      setSendStatus('error');
      return;
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, tel, message }),
      });

      if (res.ok) {
        setSendStatus('success');
        form.reset();
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSendStatus('error');
      }
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

      <form className={styles.wrapper} onSubmit={handleSubmit}>
        <div className={styles.item}>
          <label className={styles.label}>
            会社名／寺院名<span className={styles.required}>必須</span>
          </label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            placeholder="例）普蔵院"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>
            メールアドレス<span className={styles.required}>必須</span>
          </label>
          <input
            className={styles.input}
            type="text"
            name="email"
            value={email}
            placeholder="例）abc@mail.co.jp"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>電話番号</label>
          <input
            className={styles.input}
            type="tel"
            name="tel"
            placeholder="例）012-345-6789"
          />
        </div>

        <div className={styles.item}>
          <label className={styles.label}>
            お問い合わせ内容<span className={styles.required}>必須</span>
          </label>
          <textarea
            className={styles.textarea}
            name="message"
            value={message}
            placeholder="お問合わせ内容をご入力ください。"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className={styles.btns}>
          <button
            className={styles.button}
            type="submit"
            disabled={isDisabled || sendStatus === 'sending'}
          >
            {sendStatus === 'sending' ? '送信中…' : '送信'}
          </button>
        </div>

        {sendStatus === 'success' && <p>送信完了しました！</p>}
        {sendStatus === 'error' && (
          <p>
            入力内容を確認してください。必須項目が未入力の可能性があります。
          </p>
        )}
      </form>
    </Container>
  );
}
