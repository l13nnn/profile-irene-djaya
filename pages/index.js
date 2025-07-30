"use client";

import { Layout } from 'antd';
import Link from 'next/link';

const { Header } = Layout;

export default function ProfilPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor : '#B9375D', fontSize: '1.2rem', textAlign: 'center' }}>
        <Link href="/pages/profile" style={{ color: 'white' }}>Profile Page</Link>
      </Header>
    </Layout>
  );
}