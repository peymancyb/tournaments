import React from "react";
import { useSelector } from "react-redux";
import { List, Avatar, Row, Col } from "antd";

function SearchResulComponent() {
  const documents = useSelector(store => store.Search.documents);
  const loading = useSelector(store => store.Search.pending);

  return (
    <Row type="flex" justify="center">
      <Col span={8}>
        <List
          itemLayout="horizontal"
          dataSource={documents}
          loading={loading}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}

export default SearchResulComponent;
