"use client";

import { useEffect } from 'react';
import { Layout, Typography, Button, Card, Space, Avatar, message } from 'antd';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

export default function profile() {
  useEffect(() => {
    message.success('Welcome to your profile!');
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ backgroundColor: '#B9375D', color: '#fff', fontSize: '1.2rem', display: 'flex', justifyContent: 'center' }}>
        Profile Page
      </Header>
      <Content style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
        <Card style={{ maxWidth: 500, width: '100%' }}>
          <Space direction="vertical" style={{ width: '100%' }} align="center">
            <Avatar size={64}>ID</Avatar>
            <Typography>
              <Title level={3}>Full Name: Irene Djaya</Title>
              <Paragraph>Class: 11 RPL</Paragraph>
              <Paragraph>Major: Software Engineering</Paragraph>
              <Paragraph>Hobbies: Reading</Paragraph>
            </Typography>
            <Space>
              <Button type="primary">Edit</Button>
              <Button type="primary" danger>Logout</Button>
            </Space>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
}