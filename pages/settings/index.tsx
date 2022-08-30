import { NextPage } from "next";
import React, { useState } from "react";
import { Text } from "../../atoms";
import { Layout } from "../../template";
import styles from "./Settings.module.scss";
import { Input, Col, Row, message, Upload, Button, Form, Select } from "antd";
// import Image from "next/image";
import Setting from "../../template/setting";
import type { UploadChangeParam } from "antd/es/upload";
import {
  SearchOutlined,
  InfoCircleFilled,
  FormOutlined,
  EditOutlined,
  BellOutlined,
  GlobalOutlined,
  PullRequestOutlined,
} from "@ant-design/icons";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const Settings: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? "Loading..." : "+"}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Layout active="news" head="News">
      <Setting
        sider={
          <div className={styles.sideWrapper}>
            <Input
              className={styles.input}
              placeholder="Search"
              prefix={<SearchOutlined />}
            />

            <Row className={styles.Ac}>
              <Col span={8}>
                <Text variant="p" bold={true}>
                  Account Settings
                </Text>
              </Col>
              <Col span={2} offset={12}>
                <FormOutlined />
              </Col>
            </Row>

            <Text variant="p">Change your profile and account settings</Text>

            <Upload
              name="avatar"
              listType="picture-card"
              className={styles.avatarUploader}
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>

            <div className={styles.menu}>
              <Button className={styles.navButtons}>
                <div
                  style={{
                    padding: "0px 0.5rem",
                    backgroundColor: "#BB6BD9",
                    borderRadius: "3px",
                    color: "#fff",
                  }}
                >
                  <EditOutlined />
                </div>
                Account
              </Button>
              <Button className={styles.navButtons}>
                <div
                  style={{
                    padding: "0px 0.5rem",
                    backgroundColor: "#F46B6B",
                    borderRadius: "3px",
                    color: "#fff",
                  }}
                >
                  <BellOutlined />
                </div>
                Notification
              </Button>
              <Button className={styles.navButtons}>
                <div
                  style={{
                    padding: "0px 0.5rem",
                    backgroundColor: "#219653",
                    borderRadius: "3px",
                    color: "#fff",
                  }}
                >
                  <GlobalOutlined />
                </div>
                Languages
              </Button>
              <Button className={styles.navButtons}>
                <div
                  style={{
                    padding: "0px 0.5rem",
                    backgroundColor: "#9B51E0",
                    borderRadius: "3px",
                    color: "#fff",
                  }}
                >
                  <PullRequestOutlined />
                </div>
                State
              </Button>
              <Button className={styles.navButtons}>
                <div
                  style={{
                    padding: "0px 0.5rem",
                    backgroundColor: "#828282",
                    borderRadius: "3px",
                    color: "#fff",
                  }}
                >
                  <InfoCircleFilled />
                </div>
                About App
              </Button>
            </div>
          </div>
        }
        header={
          <Text
            style={{
              margin: "20px 0px auto 0px",
            }}
            variant="h4"
            bold={true}
          >
            General Settings
          </Text>
        }
        content={
          <div className={styles.formWrapper}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              className={styles.formContainer}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "50px auto 0px 40px",
                }}
              >
                <Form.Item
                  style={{
                    width: "350px",
                  }}
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  First Name
                  <Input
                    style={{
                      width: "300px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  style={{
                    width: "350px",
                  }}
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  Last Name
                  <Input
                    style={{
                      width: "300px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  style={{
                    width: "350px",
                  }}
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  Email
                  <Input
                    style={{
                      width: "300px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  style={{
                    width: "350px",
                  }}
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  Phone Number
                  <Input
                    style={{
                      width: "300px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  style={{
                    width: "350px",
                  }}
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  Enter Password
                  <Input.Password
                    style={{
                      width: "300px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  style={{
                    width: "350px",
                  }}
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  Confirm Password
                  <Input.Password
                    style={{
                      width: "300px",
                    }}
                  />
                </Form.Item>

                <Form.Item
                  style={{
                    width: "350px",
                  }}
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  Select Party
                  <Select
                    style={{
                      width: "300px",
                    }}
                  >
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  style={{
                    margin: "50px 0px 0px 230px",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "#012160",
                      color: "#fff",
                    }}
                  >
                    Save
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        }
      />
    </Layout>
  );
};

export default Settings;
